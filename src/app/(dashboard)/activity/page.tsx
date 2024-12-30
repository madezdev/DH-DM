import { Card, Container, Search } from '@/components'
import { ActivityList } from '@/interfaces/I_Activity'
import { getActivity } from '@/services/S_activity'
import { getAccount } from '@/services/S_getAcountInfo'
import React from 'react'

export default async function ActivityPage() {
  const account = await getAccount()
  const activities: ActivityList = await getActivity(account.id)
  return (
    <Container title='Activity'>
      <div className='flex flex-col gap-5 mb-[20px] z-20'>
        <Search placeholder='Buscar en tu actividad' />
        <Card
          title='Actividad'
          path='/activity'>
          
        </Card>
      </div>
    </Container>
  )
}
