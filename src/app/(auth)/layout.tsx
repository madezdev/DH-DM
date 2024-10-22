import React from 'react'
import { Footer, Topbar } from '@/components'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='h-[100dvh] w-full flex flex-col justify-between items-center'>
      <Topbar session={'register'} />
      <main className='bg-secondary h-full w-full px-[8vw] xl:px-[24vw] flex-1 '>{children}</main>
      <Footer />
    </div>
  )
}
