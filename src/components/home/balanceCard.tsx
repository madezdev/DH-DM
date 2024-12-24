import React from 'react'
import Link from 'next/link'
import { CurrencyFormat } from '../shared'
import { getAccount } from '@/services/S_getAcountInfo'

export const BalanceCard = async () => {
  const { available_amount } = await getAccount()
 
  return (
    <article className='bg-secondary w-full h-[160px] xl:h-[230px] rounded-lg px-7 py-4 flex flex-col justify-between sticky top-[80px] z-40'>
      <div className='flex items-center justify-end gap-x-2'>
        <Link href={'/'}>
          <small className='text-white text-2 xl:text-[16px]'>Ver tarjetas</small>
        </Link>
        <Link href={'/'}>
          <small className='text-white text-2 xl:text-[16px]'>Ver CVU</small>{' '}
        </Link>
      </div>
      <div className=''>
        <h2 className='text-white heading-3 pl-2'>Saldo disponible</h2>
        <div className='border border-primary px-4 py-2 rounded-full inline-block mt-1'>
          <CurrencyFormat
            value={available_amount}
            className='text-white heading-1'
          />
        </div>
      </div>
    </article>
  )
}
