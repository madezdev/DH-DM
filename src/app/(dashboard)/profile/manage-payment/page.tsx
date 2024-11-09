import React from 'react'
import { Container, ContainerCard } from '@/components'
import { CardList, RouterCard } from '@/components/manage-payment'
import { GoPlusCircle } from 'react-icons/go'

export default function ManagePaymentPage() {
  return (
    <Container title='Tarjetas'>
      <div className='flex flex-col gap-4'>
        <ContainerCard className='bg-secondary h-[148px] flex flex-col justify-center'>
          <p className='text-white heading-3'>
            Agregá tu tarjeta de débito o crédito
          </p>
          <RouterCard
            title={'Nueva tarjeta'}
            route=''
            icon={<GoPlusCircle className='text-primary w-[30px] h-[30px]' />}
          />
        </ContainerCard>
        <ContainerCard
          title='Tus tarjetas'
          className=' mb-4'>
          <CardList />
        </ContainerCard>
      </div>
    </Container>
  )
}
