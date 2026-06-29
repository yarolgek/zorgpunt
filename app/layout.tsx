import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { ConvocoreChat } from '@/components/landing/convocore-chat'
import { CookieConsentBanner } from '@/components/landing/cookie-consent-banner'
import {
  GoogleConsent,
  GoogleTagManagerNoScript,
} from '@/components/landing/google-consent'
import { WhatsAppFloatingButton } from '@/components/landing/whatsapp-floating-button'
import { brand } from '@/lib/brand'
import { getSiteUrl } from '@/lib/site-url'
import './globals.css'

const geistSans = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans',
  display: 'swap',
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
  display: 'swap',
})

const homeTitle =
  'Beste Zorgbemiddeling Roermond, ZorgpuntConnect | Zorgpersoneel inhuren, ZZP-zorgprofessionals, detachering en uitzendbureau voor de zorg in Roermond en omgeving (Limburg, Noord-Brabant en Gelderland)'

const homeDescription =
  'ZorgpuntConnect is dé zorgbemiddelaar in Roermond. Wij bemiddelen en detacheren gekwalificeerde ZZP-zorgprofessionals voor zorgorganisaties in Limburg, Noord-Brabant en Gelderland. Snel, persoonlijk en SNA-gecertificeerd.'

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: homeTitle,
  description: homeDescription,
  keywords: ['zorgbemiddeling Roermond', 'zorgpersoneel inhuren', 'zzp zorg', 'zzp zorgprofessionals', 'detachering zorg', 'uitzendbureau zorg', 'zorgbemiddelaar', 'freelance zorg', 'zorgorganisatie', 'zorgpuntconnect', 'zpc', 'Roermond', 'Limburg', 'Noord-Brabant', 'thuiszorg', 'verpleegkundige'],
  authors: [{ name: brand.name }],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    siteName: brand.name,
    title: homeTitle,
    description: homeDescription,
    locale: 'nl_NL',
    type: 'website',
    url: '/',
  },
  twitter: {
    card: 'summary_large_image',
    title: homeTitle,
    description: homeDescription,
  },
  icons: {
    icon: [{ url: '/logo-zpc.png', type: 'image/png' }],
    apple: '/logo-zpc.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="nl"
      className={`${geistSans.variable} ${geistMono.variable} light bg-background scroll-smooth`}
      suppressHydrationWarning
    >
      <GoogleConsent />
      <body className={`${geistSans.className} font-sans antialiased`}>
        <GoogleTagManagerNoScript />
        {children}
        <CookieConsentBanner />
        <WhatsAppFloatingButton />
        <ConvocoreChat />
      </body>
    </html>
  )
}