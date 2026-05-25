import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
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
  title: brand.metaTitle,
  description: brand.tagline,
  generator: 'v0.app',
  keywords: ['zzp zorg', 'freelance zorg', 'zorgpersoneel', 'zorgorganisatie', 'zorgpuntconnect', 'zpc', 'Nederland', 'thuiszorg', 'verpleegkundige'],
  authors: [{ name: brand.name }],
  openGraph: {
    siteName: brand.name,
    title: brand.metaTitle,
    description: brand.tagline,
    locale: 'nl_NL',
    type: 'website',
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
      className={`${geistSans.variable} ${geistMono.variable} bg-background scroll-smooth`}
    >
      <body className={`${geistSans.className} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
