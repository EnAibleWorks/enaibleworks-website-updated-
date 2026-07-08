import * as React from 'react'

import {
  Body,
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

interface ReauthenticationEmailProps {
  token: string
}

export const ReauthenticationEmail = ({ token }: ReauthenticationEmailProps) => (
  <Html lang="en" dir="ltr">
    <Head />
    <Preview>Your EnAibleWorks verification code.</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={header}>
          <Text style={brand}>EnAibleWorks</Text>
        </Section>
        <Section style={card}>
          <Heading style={h1}>Confirm it's you</Heading>
          <Text style={text}>
            Use the verification code below to confirm your identity and
            continue securely with EnAibleWorks.
          </Text>
          <Text style={codeStyle}>{token}</Text>
          <Hr style={hr} />
          <Text style={footer}>
            This code will expire shortly. If you did not request this, you
            may safely ignore this email.
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

export default ReauthenticationEmail

const main = { backgroundColor: '#ffffff', fontFamily: '"Inter", "Geist", Arial, sans-serif', padding: '24px 0', margin: 0 }
const container = { maxWidth: '560px', margin: '0 auto', padding: '0 20px' }
const header = { padding: '8px 0 20px' }
const brand = { fontFamily: '"Geist", "Inter", Arial, sans-serif', fontSize: '18px', fontWeight: 700 as const, color: '#0B1F3A', letterSpacing: '-0.01em', margin: 0 }
const card = { border: '1px solid #E5E9F2', borderRadius: '14px', padding: '32px 28px', backgroundColor: '#ffffff' }
const h1 = { fontFamily: '"Geist", "Inter", Arial, sans-serif', fontSize: '24px', fontWeight: 700 as const, color: '#0B1F3A', letterSpacing: '-0.02em', margin: '0 0 16px', lineHeight: '1.3' }
const text = { fontSize: '15px', color: '#334155', lineHeight: '1.6', margin: '0 0 20px' }
const codeStyle = {
  fontFamily: '"SFMono-Regular", "Menlo", Courier, monospace',
  fontSize: '30px',
  fontWeight: 700 as const,
  color: '#0B1F3A',
  letterSpacing: '0.35em',
  textAlign: 'center' as const,
  backgroundColor: '#F1F5FB',
  border: '1px solid #E5E9F2',
  borderRadius: '10px',
  padding: '18px 12px',
  margin: '0 0 8px',
}
const hr = { borderColor: '#E5E9F2', margin: '24px 0 16px' }
const footer = { fontSize: '12px', color: '#64748B', margin: 0, lineHeight: '1.5' }
const signoffWrap = { textAlign: 'center' as const, padding: '24px 0 8px' }
const signoffBrand = { fontFamily: '"Geist", "Inter", Arial, sans-serif', fontSize: '13px', fontWeight: 700 as const, color: '#0B1F3A', margin: '0 0 4px' }
const tagline = { fontSize: '12px', color: '#64748B', margin: '0 0 4px', fontStyle: 'italic' as const }
const signoffLink = { fontSize: '12px', color: '#64748B', margin: 0 }
const footerLink = { color: '#2563EB', textDecoration: 'none' }
