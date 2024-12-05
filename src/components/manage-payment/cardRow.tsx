'use client'
import React from 'react'
import { deleteCard } from '@/services/S_card'

interface Props {
  card_id: number
  accountId: number
  number_id: number
  onDelete: (card_id: number) => void
}

export const CardRow = ({ card_id, accountId, onDelete, number_id }: Props) => {
  const lastFourNumbers = number_id ? number_id.toString().slice(-4) : '****'
  
  const handleDelete = async (card_id: number) => {
    await deleteCard(accountId, card_id)
    onDelete(card_id)
  }

  return (
    <div className='flex justify-between items-center border-t pt-4 h-[96px] last:border-b last:pb-2 w-full'>
      <div className='flex justify-center items-center gap-2'>
        <div className='w-5 h-5 rounded-full bg-primary' />
        <p className='text-1'>Termina en {lastFourNumbers}</p>
      </div>
      <button
        className='text-[12px] lg:text-[16px] font-bold'
        onClick={() => handleDelete(card_id)}>
        Eliminar
      </button>
    </div>
  )
}
