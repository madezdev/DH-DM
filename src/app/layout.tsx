import React from 'react'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'

const roboto = Roboto({
  weight: ['100', '300', '400', '700', '900'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Digital Money',
  description: 'Digital Money is a Next.js project created by Digital House students.',
  keywords: ['Digital Money', 'Next.js', 'Digital House', 'Front End Developer'],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`min-h-[100dvh] w-screen overflow-x-auto ${roboto.className}`}>{children}</body>
    </html>
  )
}
