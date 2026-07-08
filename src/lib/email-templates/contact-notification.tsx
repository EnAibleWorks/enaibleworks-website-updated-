import * as React from 'react'
import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from '@react-email/components'
import type { TemplateEntry } from './registry'

interface Props {
  name?: string
  email?: string
  company?: string
  phone?: string
  message?: string
  submittedAt?: string
}

const ContactNotification = ({
  name = 'Someone',
  email = 'unknown@example.com',
  company,
  phone,
  message = '',
  submittedAt,
}: Props) => (
  <Html lang="en" dir="ltr">
    <Head />
    <Preview>New contact form message from {name}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>New contact form submission</Heading>
        <Text style={intro}>
          You just received a new message from the EnAibleWorks website contact form.
        </Text>

        <Section style={card}>
          <Row label="Name" value={name} />
          <Row label="Email" value={email} />
          {company ? <Row label="Business" value={company} /> : null}
          {phone ? <Row label="Phone" value={phone} /> : null}
          {submittedAt ? <Row label="Submitted" value={submittedAt} /> : null}
        </Section>

        <Heading as="h2" style={h2}>Message</Heading>
        <Text style={messageStyle}>{message}</Text>

        <Hr style={hr} />
        <Text style={footer}>
          Reply directly to <a href={`mailto:${email}`} style={link}>{email}</a> to respond.
        </Text>
      </Container>
    </Body>
  </Html>
)

const Row = ({ label, value }: { label: string; value: string }) => (
  <Text style={rowStyle}>
    <span style={rowLabel}>{label}: </span>
    <span style={rowValue}>{value}</span>
  </Text>
)

export const template = {
  component: ContactNotification,
  subject: (data: Record<string, any>) =>
    `New contact form message${data?.name ? ` from ${data.name}` : ''}`,
  displayName: 'Contact form notification',
  to: 'info@enaibleworks.com',
  previewData: {
    name: 'Jane Doe',
    email: 'jane@example.com',
    company: 'Acme Co.',
    phone: '555-123-4567',
    message: 'Hi — I run a small landscaping business and would love to chat about a new website.',
    submittedAt: new Date().toISOString(),
  },
} satisfies TemplateEntry

const main = { backgroundColor: '#ffffff', fontFamily: 'Inter, Arial, sans-serif' }
const container = { padding: '32px 24px', maxWidth: '560px', margin: '0 auto' }
const h1 = { fontSize: '22px', fontWeight: 600, color: '#0f172a', margin: '0 0 12px' }
const h2 = { fontSize: '15px', fontWeight: 600, color: '#0f172a', margin: '24px 0 8px', textTransform: 'uppercase' as const, letterSpacing: '0.08em' }
const intro = { fontSize: '14px', color: '#475569', margin: '0 0 20px', lineHeight: '22px' }
const card = { backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '10px', padding: '16px 20px' }
const rowStyle = { fontSize: '14px', color: '#0f172a', margin: '6px 0', lineHeight: '20px' }
const rowLabel = { color: '#64748b', fontWeight: 500 }
const rowValue = { color: '#0f172a', fontWeight: 500 }
const messageStyle = { fontSize: '14px', color: '#0f172a', margin: '0', lineHeight: '22px', whiteSpace: 'pre-wrap' as const }
const hr = { borderColor: '#e2e8f0', margin: '28px 0 16px' }
const footer = { fontSize: '13px', color: '#64748b', margin: 0 }
const link = { color: '#2563eb', textDecoration: 'underline' }
