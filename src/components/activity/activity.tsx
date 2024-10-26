import React from 'react'
import { Card } from '../common'
import { Search } from '../shared/search'
import { ActivityList } from './activityList'
import { getTokenFromCookie } from '@/utils/getTokenCookie'
import { getAcountInfo } from '@/services/S_getAcountInfo'
import { getActivity } from '@/services/S_activity'

interface Props {
  cantShowActivity?: number
}

export const Activity = async ({ cantShowActivity = 10 }: Props) => {
  const token = await getTokenFromCookie()
  const accountInfo = await getAcountInfo(token)
  const activities = await getActivity(accountInfo.id, token)

  return (
    <div className='flex flex-col gap-5 mb-[20px] '>
      <Search placeholder='Buscar en tu actividad' />
      <Card
        title='Actividad'
        nextTitlePage='Ver toda tu actividad'>
        <ActivityList activities={ activities } cantShowActivity={ cantShowActivity } />
      </Card>
    </div>
  )
}
