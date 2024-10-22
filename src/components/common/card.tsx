import React from 'react'
import Link from 'next/link'
import { FiArrowRight } from 'react-icons/fi'
interface Props {
  title: string
  className?: string
  children?: React.ReactNode
  nextTitlePage?: string
  path?: string
}

export const Card = ({
  title,
  className,
  children,
  nextTitlePage,
  path = '/',
}: Props) => {
  return (
    <article
      className={`w-full bg-[#FFF] rounded-lg shadow flex flex-col p-4 ${className}`}>
      <h3 className='heading-2'>{title}</h3>
      {children}
      {nextTitlePage && (
        <Link href={path}>
          <div className='flex justify-between items-center mt-4'>
            <span className='button-1'> {nextTitlePage} </span>
            <FiArrowRight className='w-[1.25rem] h-[1.25rem] text-black/50' />
          </div>
        </Link>
      )}
    </article>
  )
}
