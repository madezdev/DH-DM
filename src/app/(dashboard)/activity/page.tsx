import React from 'react'
import { Container, Search } from '@/components'
import { ContainerActivities } from '@/components/activity/containerActivities'
import { getActivity } from '@/services/S_activity'
import { getAccount } from '@/services/S_getAcountInfo'

export default async function ActivityPage() {
  const account = await getAccount()
  const activities = await getActivity(account.id)
  return (
    <Container title='Activity'>
      <div className='flex flex-col gap-5 mb-[20px] z-20'>
        <Search placeholder='Buscar en tu actividad' />
        <ContainerActivities activities={activities} hasPagination hasOptionsActivity />
      </div>
    </Container>
  )
}
