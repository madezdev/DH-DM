import React from 'react'
import Link from 'next/link'
import { Container, ContainerCard } from '../common'
import { ListCard } from './listCard'
import { GoPlusCircle } from 'react-icons/go'
import { Button } from '../shared'
import { Card } from '@/interfaces/I_Card'
import { useFormContext } from 'react-hook-form'

interface Props {
  cards: Card[]
  handleNextStep: () => void
}
export const SelectCard = ({ cards, handleNextStep }: Props) => {
  const { control } = useFormContext()
  return (
    <Container title='Cargar dinero'>
      <ContainerCard
        title=''
        className='bg-secondary  flex flex-col justify-center'>
        <h2 className='text-primary text-[20px] pb-3'>Seleccionar tarjeta</h2>
        <ContainerCard title='Tus tarjetas'>
          <ListCard cards={cards} control={control} />
        </ContainerCard>
        <Link href={'/manage-payment/new-card'}>
          <div className='flex items-center gap-2 pt-3'>
            <GoPlusCircle className='text-primary w-[30px] h-[30px]' />
            <p className='text-primary text-[16px] '>Nueva tarjeta</p>
          </div>
        </Link>
      </ContainerCard>
      <div className='flex justify-end my-4'>
        <Button
          title='Continuar'
          state='default'
          onClick={handleNextStep}
          className='py-5 w-[165px]'
        />
      </div>
    </Container>
  )
}
