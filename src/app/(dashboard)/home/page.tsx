import React from 'react'
import {
  Activity,
  BalanceCard,
  Container,
  TransactionButtons,
} from '@/components'

export default async function HomePage() {
  return (
    <Container title='Inicio'>
      <div className='flex flex-col justify-between gap-5 mb-[20px] w-full h-full'>
        <BalanceCard />
        <TransactionButtons />
        <Activity />
      </div>
    </Container>
  )
}
