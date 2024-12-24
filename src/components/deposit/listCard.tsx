'use client'
import React from 'react'
import { Card } from '@/interfaces/I_Card'
import { Controller, Control } from 'react-hook-form'

interface Props {
  cards: Card[]
  control: Control
}

export const ListCard = ({ cards, control }: Props) => {
  const lastFourDigits = (number: string) => number.slice(-4)

  return (
    <div>
      {cards.map((card) => (
        <div
          key={card.id}
          className='flex items-center justify-between py-4 border-b'>
          <div className='flex items-center gap-2'>
            <div className='w-5 h-5 rounded-full bg-primary' />
            <p>Termina en {lastFourDigits(card.number_id.toString())}</p>
          </div>
          <Controller
            name='card_id'
            control={control}
            render={({ field }) => (
              <input
                {...field}
                type='radio'
                value={card.id.toString()} 
                checked={field.value === card.id.toString()}
                onChange={() => field.onChange(card.id.toString())} // 
                className='w-4 h-4'
              />
            )}
          />
        </div>
      ))}
    </div>
  )
}
