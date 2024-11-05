'use client'
import { deleteCard } from '@/services/S_card'
import React from 'react'

interface Props {
  number_id: number
  accountInfo: number
  token: string
}

export const CardRow = ({ number_id, accountInfo, token }: Props) => {
  const lastFourNumbers = number_id.toString().slice(-4)

  const handleDelete = async (car_id: number) => {
    await deleteCard(accountInfo, car_id, token)
    console.log('Card deleted', car_id)
  }

  return (
    <div className='flex justify-between items-center border-t pt-4 h-[96px] last:border-b last:pb-2 w-full'>
      <div className='flex justify-center items-center gap-2'>
        <div className='w-5 h-5 rounded-full bg-primary' />
        <p className='text-1'>Termina en {lastFourNumbers}</p>
      </div>
      <button
        onClick={() => handleDelete(number_id)}
        className='text-2'>
        Eliminar
      </button>
    </div>
  )
}
