import * as React from 'react'
import { render } from 'react-email'
import { createClient } from '@supabase/supabase-js'
import { createFileRoute } from '@tanstack/react-router'
import { z } from 'zod'
import { TEMPLATES } from '@/lib/email-templates/registry'

const SITE_NAME = 'EnAibleWorks'
const SENDER_DOMAIN = 'notify.enaibleworks.com'
const FROM_DOMAIN = 'notify.enaibleworks.com'
const TEMPLATE_NAME = 'contact-notification'

const contactSchema = z.object({
  name: z.string().trim().min(1, 'Name is required').max(100),
  email: z.string().trim().email('Invalid email').max(255),
  company: z.string().trim().max(150).optional().or(z.literal('')),
  phone: z.string().trim().max(40).optional().or(z.literal('')),
  message: z.string().trim().min(1, 'Message is required').max(4000),
  // Honeypot — bots fill hidden fields
  website: z.string().max(0).optional().or(z.literal('')),
})

function generateToken(): string {
  const bytes = new Uint8Array(32)
  crypto.getRandomValues(bytes)
  return Array.from(bytes)
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('')
}

export const Route = createFileRoute('/api/public/contact')({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
        const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY
        if (!supabaseUrl || !supabaseServiceKey) {
          return Response.json({ error: 'Server not configured' }, { status: 500 })
        }

        let parsed
        try {
          const body = await request.json()
          parsed = contactSchema.parse(body)
        } catch (err) {
          return Response.json(
            { error: 'Invalid form data', details: err instanceof Error ? err.message : String(err) },
            { status: 400 },
          )
        }

        // Silently drop honeypot hits
        if (parsed.website) {
          return Response.json({ success: true })
        }

        const template = TEMPLATES[TEMPLATE_NAME]
        if (!template) {
          return Response.json({ error: 'Template missing' }, { status: 500 })
        }

        const recipient = template.to
        if (!recipient) {
          return Response.json({ error: 'No recipient configured' }, { status: 500 })
        }

        const templateData = {
          name: parsed.name,
          email: parsed.email,
          company: parsed.company || undefined,
          phone: parsed.phone || undefined,
          message: parsed.message,
          submittedAt: new Date().toLocaleString('en-US', { timeZone: 'America/New_York' }) + ' ET',
        }

        const supabase = createClient(supabaseUrl, supabaseServiceKey)
        const messageId = crypto.randomUUID()
        const normalizedRecipient = recipient.toLowerCase()

        // Ensure unsubscribe token exists for the fixed recipient
        let unsubscribeToken: string
        const { data: existingToken } = await supabase
          .from('email_unsubscribe_tokens')
          .select('token, used_at')
          .eq('email', normalizedRecipient)
          .maybeSingle()

        if (existingToken && !existingToken.used_at) {
          unsubscribeToken = existingToken.token
        } else {
          unsubscribeToken = generateToken()
          await supabase
            .from('email_unsubscribe_tokens')
            .upsert(
              { token: unsubscribeToken, email: normalizedRecipient },
              { onConflict: 'email', ignoreDuplicates: true },
            )
          const { data: stored } = await supabase
            .from('email_unsubscribe_tokens')
            .select('token')
            .eq('email', normalizedRecipient)
            .maybeSingle()
          if (stored?.token) unsubscribeToken = stored.token
        }

        const element = React.createElement(template.component, templateData)
        const html = await render(element)
        const text = await render(element, { plainText: true })
        const subject =
          typeof template.subject === 'function'
            ? template.subject(templateData)
            : template.subject

        await supabase.from('email_send_log').insert({
          message_id: messageId,
          template_name: TEMPLATE_NAME,
          recipient_email: recipient,
          status: 'pending',
        })

        const { error: enqueueError } = await supabase.rpc('enqueue_email', {
          queue_name: 'transactional_emails',
          payload: {
            message_id: messageId,
            to: recipient,
            from: `${SITE_NAME} <noreply@${FROM_DOMAIN}>`,
            reply_to: parsed.email,
            sender_domain: SENDER_DOMAIN,
            subject,
            html,
            text,
            purpose: 'transactional',
            label: TEMPLATE_NAME,
            idempotency_key: messageId,
            unsubscribe_token: unsubscribeToken,
            queued_at: new Date().toISOString(),
          },
        })

        if (enqueueError) {
          console.error('Failed to enqueue contact email', enqueueError)
          await supabase.from('email_send_log').insert({
            message_id: messageId,
            template_name: TEMPLATE_NAME,
            recipient_email: recipient,
            status: 'failed',
            error_message: 'Failed to enqueue',
          })
          return Response.json({ error: 'Failed to send message' }, { status: 500 })
        }

        return Response.json({ success: true })
      },
    },
  },
})
