import React from 'react'
import Link from 'next/link'
import { Button } from '../shared'

export const TransactionButtons = () => {
  return (
    <div className='flex flex-col gap-5 w-full sticky top-[160px]'>
      <Link href='/deposit-money'>
        <Button
          title='Ingresar dinero'
          state='default'
          className='w-full'
        />
      </Link>
      <Link href='/pay-service'>
        <Button
          title='Pago de servicios'
          state='default'
          className='w-full'
        />
      </Link>
    </div>
  )
}
