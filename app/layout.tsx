/**
 * ROOT LAYOUT
 * 
 * Main application layout wrapper
 */

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })

export const metadata: Metadata = {
  title: 'NarcoWatch Wiki - Organized Crime Intelligence Database',
  description: 'Comprehensive Wikipedia-style database for organized crime and drug cartels in Latin America. Research-focused intelligence on cartels, key figures, incidents, and trafficking routes.',
  keywords: ['drug cartels', 'organized crime', 'Latin America', 'narcotics intelligence', 'cartel database'],
  authors: [{ name: 'NarcoWatch' }],
  openGraph: {
    title: 'NarcoWatch Wiki',
    description: 'Comprehensive intelligence database for organized crime in Latin America',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body className={`${inter.variable} font-sans antialiased min-h-screen flex flex-col bg-intel-bg-primary text-intel-text-primary`}>
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

