import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import '@/styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'QuoteLinker - Life Insurance Quotes Made Simple',
  description: 'Get personalized life insurance quotes from top-rated carriers. Compare rates and find the perfect coverage for your needs.',
  keywords: 'life insurance quotes, term life insurance, whole life insurance, insurance comparison',
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'),
  openGraph: {
    title: 'QuoteLinker - Life Insurance Quotes Made Simple',
    description: 'Get personalized life insurance quotes from top-rated carriers.',
    type: 'website',
    locale: 'en_US',
    siteName: 'QuoteLinker',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'QuoteLinker - Life Insurance Quotes Made Simple',
    description: 'Get personalized life insurance quotes from top-rated carriers.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  )
} 