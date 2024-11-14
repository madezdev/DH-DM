import React from 'react'
import { Container, ContainerCard } from '@/components'
import { AddCard, CardList } from '@/components/manage-payment'
import { getAccount } from '@/services/S_getAcountInfo'
import { getCards } from '@/services/S_card'

export default async function ManagePaymentPage() {
  const accountInfo = await getAccount()
  const cards = await getCards(accountInfo.id)

  return (
    <Container title='Tarjetas'>
      <div className='flex flex-col gap-4'>
        <AddCard />
        <ContainerCard
          title='Tus tarjetas'
          className=' mb-4'>
          <CardList
            cards={cards}
            accountId={accountInfo.id}
          />
        </ContainerCard>
      </div>
    </Container>
  )
}
