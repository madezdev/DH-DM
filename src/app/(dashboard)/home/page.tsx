import React, { Suspense } from 'react'
import {
  Activity,
  BalanceCard,
  Container,
  TransactionButtons,
} from '@/components'
import { getAccount } from '@/services/S_getAcountInfo'
import { getActivity } from '@/services/S_activity'
import { ActivityList } from '@/interfaces/I_Activity'

export default async function HomePage() {
  const account = await getAccount()
  const activities: ActivityList = await getActivity(account.id)

  return (
    <Container title='Inicio'>
      <div className='flex flex-col gap-5 pt-4 w-full h-full'>
        <BalanceCard />
        <TransactionButtons />
        <Suspense fallback={<div>Loading...</div>}>
          <Activity
            activities={activities}
            cantShowActivity={10}
          />
        </Suspense>
      </div>
    </Container>
  )
}
