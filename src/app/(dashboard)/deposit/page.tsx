import React from 'react'
import { Container, ContainerCard } from '@/components'
import { RouterCard } from '@/components/deposit'
import { CiCreditCard2 } from 'react-icons/ci'
import { PiUserCircle } from 'react-icons/pi'

export default function DepositMoneyPage() {
  return (
    <Container title='Cargar dinero'>
      <div className='flex flex-col gap-4'>
        <ContainerCard className='bg-secondary h-[122px] flex flex-col justify-center'>
          <RouterCard
            title={'Transferencia bancaria'}
            route='/deposit/bank-transfer'
            icon={<PiUserCircle className='text-primary w-[40px] h-[40px]' />}
          />
        </ContainerCard>
        <ContainerCard className='bg-secondary h-[122px] flex flex-col justify-center'>
          <RouterCard
            title={'Seleccionar Tarjeta'}
            route='/deposit/card'
            icon={<CiCreditCard2 className='text-primary w-[40px] h-[40px]' />}
          />
        </ContainerCard>
      </div>
    </Container>
  )
}
