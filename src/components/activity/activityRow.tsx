import React from 'react'
import { CurrencyFormat } from '../shared/currencyFormat'

interface Props {
  transfer: string
  amount: number
  date: string
}

export const ActivityRow = ({ transfer, amount, date }: Props) => {
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { weekday: 'long' }
    const date = new Date(dateString)
    return date.toLocaleDateString('es-ES', options)
  }

  return (
    <div className='flex justify-between items-center border-t pt-2 last:border-b last:pb-4'>
      <div className='flex items-center justify-center gap-x-2'>
        <div className='w-5 h-5 rounded-full bg-primary' />
        <p className='text-[14px] md:text-[16px]'>{transfer}</p>
      </div>
      <div className='flex flex-col justify-center items-end'>
        <CurrencyFormat
          value={amount}
          className='text-[14px] md:text-[16px]'
        />
        <small className='text-right text-black/opacity-50 text-[12px] md:text-[14px] capitalize'>
          {formatDate(date)}
        </small>
      </div>
    </div>
  )
}
