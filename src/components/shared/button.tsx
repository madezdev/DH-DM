'use client'
import React from 'react'
import clsx from 'clsx'
import { CgSpinner } from 'react-icons/cg'

interface Props {
  title: string
  outline?: boolean
  disabled?: boolean
  icon?: React.ReactNode
  type?: 'button' | 'submit' | 'reset'
  state: 'default' | 'loading' | 'success' | 'error' | 'secondary' | 'disabled'
  loading?: boolean
  onClick?: () => void
  className?: string
}

export const Button = ({
  title,
  state,
  type,
  disabled = false,
  icon,
  outline,
  loading,
  onClick,
  className = '',
}: Props) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      type={type}
      className={clsx(
        `w-full lg:w-[328px] xl:w-[360px] py-4 px-8 flex items-center justify-center rounded-[8px] shadow-sm text-sm font-medium ${className}`,
        {
          'bg-primary text-secondary': state === 'default' && !outline,
          'bg-transparent border-primary border text-primary':
            state === 'default' && outline,
          'bg-[#CECECE] text-black/50 ': state === 'disabled',
          'bg-green-500': state === 'success',
          'bg-red-500': state === 'error',
          'bg-secondary text-white px-4': state === 'secondary',
          'cursor-not-allowed bg-disable': disabled,
        }
      )}>
      <div className='flex items-center justify-center w-full'>
        {loading ? (
          <CgSpinner className='animate-spin' />
        ) : (
          <span className='font-bold button-2'>{title}</span>
        )}

        {icon}
      </div>
    </button>
  )
}
