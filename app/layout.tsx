import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ConvocoreChat } from '@/components/landing/convocore-chat'
import { brand } from '@/lib/brand'
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

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'),
  title: brand.metaTitle,
  description: brand.tagline,
  keywords: ['zzp zorg', 'freelance zorg', 'zorgpersoneel', 'zorgorganisatie', 'zorgpuntconnect', 'zpc', 'Nederland', 'thuiszorg', 'verpleegkundige'],
  authors: [{ name: brand.name }],
  openGraph: {
    siteName: brand.name,
    title: brand.metaTitle,
    description: brand.tagline,
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: `${brand.name} — ${brand.shortName}`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: brand.metaTitle,
    description: brand.tagline,
    images: ['/og-image.svg'],
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
      <body className={`${geistSans.className} font-sans antialiased`}>
        {children}
        <ConvocoreChat />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}