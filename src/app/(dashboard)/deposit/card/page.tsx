import React from 'react'
import { getCards } from '@/services/S_card'
import { getAccount } from '@/services/S_getAcountInfo'
import { DepositCard } from '@/components/deposit/depositCard'


export default async function SelectBankPage() {

  const accountInfo = await getAccount()
  const cards = await getCards(accountInfo.id)

  return (
    <>
      <DepositCard cards={ cards } accountInfo={ accountInfo } />
    </>
  )
}
