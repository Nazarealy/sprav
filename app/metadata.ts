import type { Metadata } from 'next'

/**
 * SEO Metadata configuration
 * Update these values based on your project requirements
 */
export const siteConfig: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com'),
  title: {
    default: 'SPR Main',
    template: '%s | SPR Main',
  },
  description: 'A modern web application built with Next.js',
  keywords: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
  authors: [{ name: 'SPR Team' }],
  creator: 'SPR Team',
  publisher: 'SPR Team',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: 'SPR Main',
    title: 'SPR Main',
    description: 'A modern web application built with Next.js',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'SPR Main',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SPR Main',
    description: 'A modern web application built with Next.js',
    images: ['/og-image.jpg'],
    creator: '@sprteam',
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
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
}

