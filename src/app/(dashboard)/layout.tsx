import React from 'react'
import { Footer, Sidebar } from '@/components'
import { TopMenu } from '@/components/common/topMenu'

export default async function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  
  return (
    <div className='min-h-[100dvh] bg-background flex flex-col justify-between'>
      <TopMenu />
      <div className="flex flex-1 h-full">
        <Sidebar />
        <main className="px-[4vw] flex-1">{children}</main>
      </div>
      <Footer />
    </div>
  )
}
