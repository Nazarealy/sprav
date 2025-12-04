import type { Metadata } from 'next'
import { Montserrat, Montserrat_Alternates } from 'next/font/google'
import './globals.css'
import { ContactPopupProvider } from '@/contexts/ContactPopupContext'
import ContactPopupWrapper from '@/components/ContactPopupWrapper'
import { VacationOptionsPopupProvider } from '@/contexts/VacationOptionsPopupContext'
import VacationOptionsPopupWrapper from '@/components/VacationOptionsPopupWrapper'
import { ChatWindowProvider } from '@/contexts/ChatWindowContext'
import ChatWindowWrapper from '@/components/ChatWindowWrapper'
import ChatButton from '@/components/ChatButton'

const montserrat = Montserrat({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-sans',
  display: 'swap',
  weight: ['300', '400', '500', '700', '800'],
})

const montserratAlternates = Montserrat_Alternates({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-alternates',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
  title: {
    default: 'SPR Main',
    template: '%s | SPR Main',
  },
  description: 'A modern web application built with Next.js',
  keywords: ['Next.js', 'React', 'TypeScript'],
  authors: [{ name: 'SPR Team' }],
  creator: 'SPR Team',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://example.com',
    siteName: 'SPR Main',
    title: 'SPR Main',
    description: 'A modern web application built with Next.js',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SPR Main',
    description: 'A modern web application built with Next.js',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="uk" className={`${montserrat.variable} ${montserratAlternates.variable}`}>
      <body className="font-alternates antialiased">
        <ContactPopupProvider>
          <VacationOptionsPopupProvider>
            <ChatWindowProvider>
              {children}
              <ContactPopupWrapper />
              <VacationOptionsPopupWrapper />
              <ChatWindowWrapper />
              <ChatButton />
            </ChatWindowProvider>
          </VacationOptionsPopupProvider>
        </ContactPopupProvider>
      </body>
    </html>
  )
}

