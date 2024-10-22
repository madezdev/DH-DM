'use client'
import React from 'react'
import clsx from 'clsx'

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
        `w-[300px] lg:w-[328px] xl:w-[360px] p-2 h-[67px] flex items-center justify-center rounded-[8px] shadow-sm text-sm font-medium ${className}`,
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
          <svg
            className='animate-spin -ml-1 mr-3 h-5 w-5 text-white'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'>
            <circle
              className='opacity-25'
              cx='12'
              cy='12'
              r='10'
              stroke='currentColor'
              strokeWidth='4'></circle>
            <path
              className='opacity-75'
              fill='currentColor'
              d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A8.001 8.001 0 014.708 4.708L7.291 7.29zm10.582-2.582A8.001 8.001 0 0119.292 20.707l-2.582-2.582z'></path>
          </svg>
        ) : (
          <span className='font-bold text-[16px]'>{title}</span>
        )}

        {icon}
      </div>
    </button>
  )
}
