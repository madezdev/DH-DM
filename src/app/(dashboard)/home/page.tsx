import React from 'react'
import {
  Activity,
  BalanceCard,
  Container,
  TransactionButtons,
} from '@/components'
import { getAccount } from '@/services/S_getAcountInfo'
import { getActivity } from '@/services/S_activity'
import { getTokenFromCookie } from '@/utils/getTokenCookie'
import { redirect } from 'next/navigation'
import { ActivityItem } from '@/interfaces/I_Activity'

export default async function HomePage() {
  const token = await getTokenFromCookie()
  if (!token) {
    redirect('/login')
  }
  const account = await getAccount()
  const activities: ActivityItem[] = await getActivity(account.id)

  return (
    <Container title='Inicio'>
      <div className='flex flex-col gap-5 w-full h-full'>
        <BalanceCard />
        <TransactionButtons />
        <Activity activities={activities} />
      </div>
    </Container>
  )
}
