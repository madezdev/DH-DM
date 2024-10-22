import Link from 'next/link'
import React from 'react'
import { IoMenu } from 'react-icons/io5'

interface Props {
  name?: string
  lastname?: string
}

export const Avatar = ({ name, lastname }: Props) => {
  console.log(name)
  return (
    <div className='flex items-center gap-1'>
      <Link
        href='/'
        className='bg-primary h-[34px] w-[40px] rounded-[8px] flex items-center justify-center gap-2'>
        <span className='heading-3 '>
          {name
            ?.split(' ')
            .map((chart) => chart[0])
            .join('')}
          {lastname
            ?.split(' ')
            .map((chart) => chart[0])
            .join('')}
        </span>
      </Link>
      <div className='hidden lg:block pl-2'>
        <p className='heading-3 text-white'>Hola, {name} {lastname}</p>
      </div>
      <div className='block lg:hidden'>
        <IoMenu className='text-[40px] text-primary' />
      </div>
    </div>
  )
}
