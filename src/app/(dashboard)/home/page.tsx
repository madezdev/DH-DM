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
      <div className='flex flex-col gap-5 pt-4 w-full h-full'>
        <BalanceCard />
        <TransactionButtons />
        <Activity  />
      </div>
    </Container>
  )
}
