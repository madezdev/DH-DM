import React from 'react'
import { Header } from './header'

interface Props {
  title: string
  children: React.ReactNode
}

export const Container = ({ children, title }: Props) => {
  return (
    <section className='flex flex-col gap-y-5 h-full'>
      <Header title={title} />
      <div className='flex-1'>
        {children}
      </div>
    </section>
  )
}
