'use client'
import clsx from 'clsx'

interface Props {
  title: string
  outline?: boolean
  disabled?: boolean
  icon?: React.ReactNode
  type?: 'button' | 'submit' | 'reset'
  state: 'default' | 'loading' | 'success' | 'error' | 'secondary' | 'disabled'
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
  onClick,
  className = '',
}: Props) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      type={type}
      className={clsx(
        `flex items-center justify-center px-8 py-2 rounded-[8px] shadow-sm text-sm font-medium ${className}`,
        {
          'bg-primary text-secondary': state === 'default' && !outline,
          'bg-transparent border-primary border text-primary':
            state === 'default' && outline,
          'bg-[#CECECE]': state === 'disabled',
          'bg-green-500': state === 'success',
          'bg-red-500': state === 'error',
          'bg-secondary text-white px-4': state === 'secondary',
          'cursor-not-allowed bg-disable': disabled,
        }
      )}>
      <div className='flex items-center justify-center w-full'>
        <span className='font-bold text-[16px]'>{title}</span>
        {icon}
      </div>
    </button>
  )
}
