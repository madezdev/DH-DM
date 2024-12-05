import React from 'react'
import { Container } from '@/components'
import { getAccount } from '@/services/S_getAcountInfo'
import { getCards } from '@/services/S_card'
import { getTokenFromCookie } from '@/utils/getTokenCookie'
import { redirect } from 'next/navigation'
import ManagePaymentClient from '@/components/manage-payment/managePaymentClient'

export default async function ManagePaymentPage() {
  const token = await getTokenFromCookie()
  if (!token) {
    redirect('/login')
  }
  const accountInfo = await getAccount()
  const cards = await getCards(accountInfo.id)

  return (
    <Container title='Tarjetas'>
      <ManagePaymentClient
        accountId={accountInfo.id}
        initialCards={cards}
      />
    </Container>
  )
}
