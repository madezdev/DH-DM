'use client'
import React from 'react'
import { useRouter } from 'next/navigation'

export const TransactionButtons = () => {
  const router = useRouter()
  return (
    <div className='flex flex-col lg:flex-row lg:justify-between gap-5 w-full sticky top-[160px]'>
      <button
        className='bg-primary rounded-lg py-2 px-4 text-black button-2 md:text-[24px] font-bold w-full h-[67px] md:h-[85px] xl:h-[106px]'
        onClick={() => router.push('/deposit')}>
        Cargar dinero
      </button>

      <button
        className='bg-primary rounded-lg py-2 px-4 text-black button-2 md:text-[24px] font-bold w-full h-[67px] md:h-[85px] xl:h-[106px]'
        onClick={() => router.push('/withdraw')}>
        Pago de servicios
      </button>
    </div>
  )
}
