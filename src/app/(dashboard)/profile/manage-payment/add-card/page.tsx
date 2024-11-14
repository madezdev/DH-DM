import { Container } from '@/components'
import { AddFormCard } from '@/components/manage-payment'

import { getAccount } from '@/services/S_getAcountInfo'
import React from 'react'

export  default async function AddCardPage() {
  const { id } = await getAccount()
  
  return (
    <Container title='Tarjetas'>
      <AddFormCard account_id={ id } />
    </Container>
  )
}
