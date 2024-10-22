import React from 'react'

interface Props {
  children: React.ReactNode
  title?: string
  className?: string
}

export const ContainerCard = ({ children, title, className }: Props) => {
  return (
    <article
      className={`w-full bg-[#FFF] rounded-lg shadow flex flex-col p-4 ${className}`}>
      <p className='text-[16px] font-bold'>{title}</p>
      {children}
    </article>
  )
}
