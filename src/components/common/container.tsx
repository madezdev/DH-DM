import React from 'react'
import { Header } from './header'

interface Props {
  title: string
  children: React.ReactNode
  className?: string
}

export const Container = ({ children, title, className }: Props) => {
  return (
    <section className={`flex flex-col h-full ${className}`}>
      <Header title={title} />
      <div className='flex-1'>{children}</div>
    </section>
  )
}
