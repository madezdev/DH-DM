import React from 'react'

interface Props {
  children: React.ReactNode
  title?: string
  className?: string
  childrenClassName?: string
}

export const ContainerBlackCard = ({
  title,
  className,
  children,
  childrenClassName,
}: Props) => {
  return (
    <article
      className={`w-full bg-bgSecundary rounded-lg shadow flex flex-col p-4 ${className}`}>
      <div className='mb-5'>
        <p className='text-[20px] text-left text-primary font-bold'>{title}</p>
      </div>
      <div className={`${childrenClassName}`}>{children}</div>
    </article>
  )
}
