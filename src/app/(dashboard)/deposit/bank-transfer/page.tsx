import React from 'react'
import { BankData, Container } from '@/components'
import { getAccount } from '@/services/S_getAcountInfo'


export default async function BankTransferPage() {
  const account = await getAccount()
  return (
    <Container title='Cargar dinero'>
      <BankData  accountInfo={ account } />
    </Container>
  )
}
