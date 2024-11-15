'use client'
import React, { useEffect, useState } from 'react'
import { ContainerCard } from '../common'
import { RouterCard } from './routerCard'
import { GoPlusCircle } from 'react-icons/go'

interface Props {
  numberOfCards: number
}

export const AddCard = ({ numberOfCards }: Props) => {
  const [isFull, setIsFull] = useState<boolean>(false)
  const MAX_CARDS = 10

  useEffect(() => {
    if (numberOfCards >= MAX_CARDS) {
      setIsFull(true)
    }
  }, [numberOfCards])

  return (
    <ContainerCard className='bg-secondary h-[148px] flex flex-col justify-center'>
      {isFull ? (
        <p className='text-white heading-3'>Llegaste al límite de tarjetas</p>
      ) : (
        <p className='text-white heading-3'>
          Agregá tu tarjeta de débito o crédito
        </p>
      )}
      {!isFull && (
        <RouterCard
          title={'Nueva tarjeta'}
          route='/profile/manage-payment/add-card'
          icon={<GoPlusCircle className='text-primary w-[30px] h-[30px]' />}
        />
      )}
    </ContainerCard>
  )
}
