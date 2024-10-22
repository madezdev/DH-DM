import React from 'react'
import { Card } from '../common'
import { Search } from '../shared/search'
import { ActivityList } from './activityList'
import { getTokenFromCookie } from '@/utils/getTokenCookie'
import { getAcountInfo } from '@/services/S_getAcountInfo'
import { getActivity } from '@/services/S_activity'

export const Activity = async () => {
  const token = await getTokenFromCookie()
  const accountInfo = await getAcountInfo(token)
  const activities = await getActivity(accountInfo.id, token)

  return (
    <>
      <Search placeholder='Buscar en tu actividad' />
      <Card
        title='Actividad'
        nextTitlePage='Ver toda tu actividad'>
        <ActivityList activities={activities} />
      </Card>
    </>
  )
}
