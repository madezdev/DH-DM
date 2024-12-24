'use client'
import React, { useState } from 'react'
import { ContainerCard } from '@/components'
import { AddCard, CardList } from '@/components/manage-payment'
import { Card } from '@/interfaces/I_Card'

interface Props {
  accountId: number
  initialCards: Card[]
}

export default function ManagePaymentClient({
  accountId,
  initialCards,
}: Props) {
  const [cards, setCards] = useState(initialCards)

  const handleCardRemoved = (cardId: number) => {
    setCards((prevCards) => prevCards.filter((card) => card.id !== cardId))
  }

  return (
    <div className='flex flex-col gap-4'>
      <AddCard numberOfCards={cards.length} />
      <ContainerCard
        title='Tus tarjetas'
        className='mb-4 h-[calc(100dvh-364px)] overflow-y-auto'>
        <CardList
          cards={cards}
          accountId={accountId}
          onCardRemoved={handleCardRemoved}
        />
      </ContainerCard>
    </div>
  )
}
