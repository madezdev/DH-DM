'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import { FiArrowRight } from 'react-icons/fi'

interface Props {
  title: string
  route: string
  icon?: React.ReactNode
}

export const RouterCard = ({ title, route, icon }: Props) => {
  const router = useRouter()
  return (
    <button
      onClick={() => {
        router.push(route)
      }}
      className='flex justify-between items-center gap-2 flex-1'>
      <div className='flex justify-center items-center gap-2 '>
        {icon}
        <h3 className='text-[20px] text-primary flex-1'>{title}</h3>
      </div>
      <FiArrowRight className='w-[30px] h-[30px] text-primary' />
    </button>
  )
}
