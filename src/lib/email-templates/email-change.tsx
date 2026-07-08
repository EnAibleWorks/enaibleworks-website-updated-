import * as React from 'react'

import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Link,
  Preview,
  Section,
  Text,
} from '@react-email/components'

interface EmailChangeEmailProps {
  siteName?: string
  siteUrl?: string
  // oldEmail is the user's current address (HookData.OldEmail). For the
  // NEW-recipient half of a secure email_change fanout, `email` equals the
  // recipient (NEW), so the "from" line must render oldEmail to read
  // "from OLD to NEW" instead of "from NEW to NEW".
  oldEmail: string
  email: string
  newEmail: string
  confirmationUrl: string
}

export const EmailChangeEmail = ({
  oldEmail,
  newEmail,
  confirmationUrl,
}: EmailChangeEmailProps) => (
  <Html lang="en" dir="ltr">
    <Head />
    <Preview>Confirm your new email address for EnAibleWorks.</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={header}>
          <Text style={brand}>EnAibleWorks</Text>
        </Section>
        <Section style={card}>
          <Heading style={h1}>Confirm your email change</Heading>
          <Text style={text}>
            You requested to change the email on your EnAibleWorks account
            from{' '}
            <Link href={`mailto:${oldEmail}`} style={link}>
              {oldEmail}
            </Link>{' '}
            to{' '}
            <Link href={`mailto:${newEmail}`} style={link}>
              {newEmail}
            </Link>
            .
          </Text>
          <Text style={text}>
            Please confirm this change by clicking the button below to complete
            the update.
          </Text>
          <Section style={buttonWrap}>
            <Button style={button} href={confirmationUrl}>
              Confirm Email Change
            </Button>
          </Section>
          <Text style={fineprint}>
            Or paste this link into your browser:
            <br />
            <Link href={confirmationUrl} style={link}>
              {confirmationUrl}
            </Link>
          </Text>
          <Hr style={hr} />
          <Text style={footer}>
            If you did not request this change, please secure your account
            immediately by resetting your password.
          </Text>
        </Section>
        <Section style={signoffWrap}>
          <Text style={signoffBrand}>EnAibleWorks</Text>
          <Text style={tagline}>Enable Smarter. Work Better. Grow Faster.</Text>
          <Text style={signoffLink}>
            <Link href="enaibleworks.com" style={footerLink}>
              enaibleworks.com
            </Link>
          </Text>
        </Section>
      </Container>
    </Body>
  </Html>
)

export default EmailChangeEmail

const main = { backgroundColor: '#ffffff', fontFamily: '"Inter", "Geist", Arial, sans-serif', padding: '24px 0', margin: 0 }
const container = { maxWidth: '560px', margin: '0 auto', padding: '0 20px' }
const header = { padding: '8px 0 20px' }
const brand = { fontFamily: '"Geist", "Inter", Arial, sans-serif', fontSize: '18px', fontWeight: 700 as const, color: '#0B1F3A', letterSpacing: '-0.01em', margin: 0 }
const card = { border: '1px solid #E5E9F2', borderRadius: '14px', padding: '32px 28px', backgroundColor: '#ffffff' }
const h1 = { fontFamily: '"Geist", "Inter", Arial, sans-serif', fontSize: '24px', fontWeight: 700 as const, color: '#0B1F3A', letterSpacing: '-0.02em', margin: '0 0 16px', lineHeight: '1.3' }
const text = { fontSize: '15px', color: '#334155', lineHeight: '1.6', margin: '0 0 16px' }
const link = { color: '#2563EB', textDecoration: 'underline' }
const buttonWrap = { margin: '20px 0' }
const button = { backgroundColor: '#2563EB', color: '#ffffff', fontSize: '15px', fontWeight: 600 as const, borderRadius: '10px', padding: '14px 28px', textDecoration: 'none', display: 'inline-block' }
const fineprint = { fontSize: '12px', color: '#64748B', lineHeight: '1.5', margin: '0 0 8px', wordBreak: 'break-all' as const }
const hr = { borderColor: '#E5E9F2', margin: '24px 0 16px' }
const footer = { fontSize: '12px', color: '#64748B', margin: 0, lineHeight: '1.5' }
const signoffWrap = { textAlign: 'center' as const, padding: '24px 0 8px' }
const signoffBrand = { fontFamily: '"Geist", "Inter", Arial, sans-serif', fontSize: '13px', fontWeight: 700 as const, color: '#0B1F3A', margin: '0 0 4px' }
const tagline = { fontSize: '12px', color: '#64748B', margin: '0 0 4px', fontStyle: 'italic' as const }
const signoffLink = { fontSize: '12px', color: '#64748B', margin: 0 }
const footerLink = { color: '#2563EB', textDecoration: 'none' }
