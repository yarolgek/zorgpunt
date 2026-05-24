import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'ZorgMatch - Freelance Zorgbemiddeling & Zorgpersoneel',
  description: 'ZorgMatch brengt gekwalificeerde freelance zorgverleners (zzp\'ers) en zorgorganisaties in heel Nederland samen. Snel, persoonlijk en betrouwbaar.',
  generator: 'v0.app',
  keywords: ['zzp zorg', 'freelance zorg', 'zorgpersoneel', 'zorgorganisatie', 'zorgmatch', 'Nederland', 'thuiszorg', 'verpleegkundige'],
  authors: [{ name: 'ZorgMatch' }],
  openGraph: {
    title: 'ZorgMatch - Freelance Zorgbemiddeling & Zorgpersoneel',
    description: 'Koppel gekwalificeerde zzp\'ers in de zorg aan zorgorganisaties. Snel, persoonlijk en betrouwbaar.',
    locale: 'nl_NL',
    type: 'website',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="nl" className="bg-background scroll-smooth">
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
