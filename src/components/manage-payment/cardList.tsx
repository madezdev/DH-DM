import React from 'react'
import { CardRow } from './cardRow'
import { getTokenFromCookie } from '@/utils/getTokenCookie'
import { getAccount } from '@/services/S_getAcountInfo'
import { getCards } from '@/services/S_card'

export const CardList = async () => {
  const token = await getTokenFromCookie()
  const accountInfo = await getAccount()
  const cards = await getCards(accountInfo.id, token)
  
  return (
    <div className='flex flex-col gap-2 justify-center h-full mt-4'>
      {cards.map((item, index) => (
        <CardRow
          key={index}
          number_id={ item.number_id }
          accountInfo={ accountInfo.user_id }
          token={ token }
        />
      ))}
    </div>
  )
}
