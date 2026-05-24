import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'ZorgMatch - Vind de Juiste Zorgverlener bij u in de Buurt',
  description: 'ZorgMatch helpt u snel en persoonlijk de perfecte zorgverlener te vinden. Gratis adviesgesprek, binnen 24 uur reactie. Ruim 150+ geverifieerde zorgverleners in heel Nederland.',
  generator: 'v0.app',
  keywords: ['zorgverlener', 'mantelzorg', 'thuiszorg', 'Nederland', 'zorgmatch', 'hulp thuis'],
  authors: [{ name: 'ZorgMatch' }],
  openGraph: {
    title: 'ZorgMatch - Vind de Juiste Zorgverlener bij u in de Buurt',
    description: 'Gratis adviesgesprek, binnen 24 uur reactie. Ruim 150+ geverifieerde zorgverleners.',
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
        <SpeedInsights />
      </body>
    </html>
  )
}
