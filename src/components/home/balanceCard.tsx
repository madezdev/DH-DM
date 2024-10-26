import React from 'react'
import Link from 'next/link'
import { CurrencyFormat } from '../shared'
import { getTokenFromCookie } from '@/utils/getTokenCookie'
import { getAcountInfo } from '@/services/S_getAcountInfo'

export const BalanceCard = async () => {
  const token = await getTokenFromCookie()
  const { available_amount } = await getAcountInfo(token)
  return (
    <article className='bg-secondary w-full h-[160px] xl:h-[230px] rounded-lg px-7 py-4 flex flex-col justify-between sticky top-[80px] z-30'>
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
