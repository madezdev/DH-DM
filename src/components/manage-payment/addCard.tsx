import React from 'react'
import { ContainerCard } from '../common'
import { RouterCard } from './routerCard'
import { GoPlusCircle } from 'react-icons/go'

export const AddCard = () => {
  return (
    <ContainerCard className='bg-secondary h-[148px] flex flex-col justify-center'>
      <p className='text-white heading-3'>
        Agregá tu tarjeta de débito o crédito
      </p>
      <RouterCard
        title={'Nueva tarjeta'}
        route='/profile/manage-payment/add-card'
        icon={<GoPlusCircle className='text-primary w-[30px] h-[30px]' />}
      />
    </ContainerCard>
  )
}
