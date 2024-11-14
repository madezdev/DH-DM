'use client'
import React, { useState } from 'react'
import { CardRow } from './cardRow'
import { Card } from '@/interfaces/I_Card'

interface Props {
  cards: Card[]
  accountId: number
}

export const CardList = ({ cards, accountId }: Props) => {
  const [cardList, setCardList] = useState<Card[]>(cards)

  const handleCardDelete = (card_id: number) => {
    setCardList((prevCards) => prevCards.filter((card) => card.id !== card_id))
  }

  return (
    <div className='flex flex-col gap-2 justify-center h-full mt-4'>
      {cardList.map((item, index) => (
        <CardRow
          key={index}
          number_id={item.number_id}
          card_id={item.id}
          accountId={accountId}
          onDelete={handleCardDelete}
        />
      ))}
    </div>
  )
}
