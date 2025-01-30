/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
'use client'
import React from 'react'
import { useSearchParams } from 'next/navigation'
import { Card } from '../common'
import { Search } from '../shared/search'
import { ListActivity } from './activityList'
import { ActivityItem } from '@/interfaces/I_Activity'

interface Props {
  activities: ActivityItem[]
}

const NUMEBER_OF_ACTIVITY = 20

export const Activity = ({ activities }: Props) => {
  const searchParams = useSearchParams()
  const searchActivity = searchParams.get('query')

  const filteredActivities = searchActivity
    ? activities.filter((activity) =>
        activity.description
          .toLowerCase()
          .includes(searchActivity.toLowerCase())
      )
    : activities

  return (
    <div className='flex flex-col gap-5 mb-[20px] z-20'>
      <Search placeholder='Buscar en tu actividad' />
      <Card
        title='Actividad'
        nextTitlePage='Ver toda tu actividad'
        path='/activity'
        className='mb-[60px]'
        >
        <ListActivity
          activities={filteredActivities}
          numberOfActivity={NUMEBER_OF_ACTIVITY}
        />
      </Card>
    </div>
  )
}
