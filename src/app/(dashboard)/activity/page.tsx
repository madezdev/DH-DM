import { Container, ListActivity, Search } from '@/components'
import { ContainerActivities } from '@/components/activity/containerActivities'
import { getActivity } from '@/services/S_activity'
import { getAccount } from '@/services/S_getAcountInfo'
import React from 'react'

export default async function ActivityPage() {
  const account = await getAccount()
  const activities = await getActivity(account.id)
  return (
    <Container title='Activity'>
      <div className='flex flex-col gap-5 mb-[20px] z-20'>
        <Search placeholder='Buscar en tu actividad' />
        <ContainerActivities title='Actividad'>
          <ListActivity activities={activities} />
        </ContainerActivities>
      </div>
    </Container>
  )
}
