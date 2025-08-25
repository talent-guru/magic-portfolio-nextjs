import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Christian Orca - Full-Stack Developer',
  description: 'Visionary Full-Stack Developer with 9+ years of experience driving revenue growth and operational efficiency through high-performance, scalable eCommerce solutions.',
  keywords: 'Full-Stack Developer, eCommerce, Node.js, React, TypeScript, MedusaJS, Strapi, Shopify',
  authors: [{ name: 'Christian Orca' }],
  creator: 'Christian Orca',
  openGraph: {
    title: 'Christian Orca - Full-Stack Developer',
    description: 'Visionary Full-Stack Developer with 9+ years of experience in eCommerce solutions',
    url: 'https://christianorca.dev',
    siteName: 'Christian Orca Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Christian Orca - Full-Stack Developer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Christian Orca - Full-Stack Developer',
    description: 'Visionary Full-Stack Developer with 9+ years of experience in eCommerce solutions',
    images: ['/og-image.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
