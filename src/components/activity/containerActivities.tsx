'use client'
import React from 'react'
import { PiSlidersHorizontalLight } from 'react-icons/pi'

interface Props {
  title: string
  className?: string
  children?: React.ReactNode
}

export const ContainerActivities = ({ title, className, children }: Props) => {
  return (
    <article
      className={`w-full bg-[#FFF] rounded-lg shadow flex flex-col p-4 ${className}`}>
      <div className='flex justify-between items-center'>
        <h3 className='heading-2'>{title}</h3>
        <button 
          className='flex items-center gap-2 text-[#000]'
          onClick={() => {console.log('Click filtros')
          }}
        >
          <span className='button-3'>Filtros</span>
          <PiSlidersHorizontalLight className='text-[20px]'/>
        </button>
      </div>
      {children}
    </article>
  )
}
