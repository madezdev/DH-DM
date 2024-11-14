import React from 'react'
import { redirect } from 'next/navigation'
import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'
import './globals.css'
import { getTokenFromCookie } from '@/utils/getTokenCookie'

const openSans = Open_Sans({
  weight: ['300', '400', '600', '700', '800'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Digital Money',
  description:
    'Digital Money is a Next.js project created by Digital House students.',
  keywords: [
    'Digital Money',
    'Next.js',
    'Digital House',
    'Front End Developer',
  ],
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const token = await getTokenFromCookie()
  if (!token) {
    redirect('/login')
  }
  return (
    <html lang='es'>
      <body
        className={`min-h-[100dvh] w-screen overflow-x-auto ${openSans.className}`}>
        {children}
      </body>
    </html>
  )
}
