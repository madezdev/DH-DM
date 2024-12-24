import { Container } from '@/components'
import { AddFormCard } from '@/components/manage-payment'

import { getAccount } from '@/services/S_getAcountInfo'
import { getTokenFromCookie } from '@/utils/getTokenCookie'
import { redirect } from 'next/navigation'
import React from 'react'

export default async function AddCardPage() {
  const token = await getTokenFromCookie()
  if (!token) {
    redirect('/login')
  }
  const { id } = await getAccount()

  return (
    <Container title='Tarjetas'>
      <AddFormCard account_id={id} />
    </Container>
  )
}
