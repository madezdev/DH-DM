import React from 'react'
import { Footer, Topbar } from '@/components'
import { getTokenFromCookie } from '@/utils/getTokenCookie'
import { redirect } from 'next/navigation'

export default async function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  const token = await getTokenFromCookie()
  if (!token) {
    redirect('/login')
  }
  return (
    <div className='min-h-[100dvh] bg-background flex flex-col justify-between'>
      <Topbar session='menu' />
      <main className=' px-[4vw] mt-[60px] flex-1'>{children}</main>
      <Footer />
    </div>
  )
}
