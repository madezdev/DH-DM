'use client'
import React, { useEffect, useState } from 'react'
import { CardRow } from './cardRow'
import { Card } from '@/interfaces/I_Card'

interface Props {
  cards: Card[]
  accountId: number
  onCardRemoved: (cardId: number) => void
}

export const CardList = ({ cards, accountId, onCardRemoved }: Props) => {
  const [cardList, setCardList] = useState<Card[]>(cards)

  const handleCardDelete = (card_id: number) => {
    onCardRemoved(card_id)
    setCardList((prevCards) => prevCards.filter((card) => card.id !== card_id))
  }

  useEffect(() => {}, [cardList, handleCardDelete])

  return (
    <div className='flex flex-col justify-center mt-4'>
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
