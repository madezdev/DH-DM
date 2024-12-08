'use client'
import React from 'react'
import { Card } from '../common'
import { Search } from '../shared/search'
import { ActivityList } from '@/interfaces/I_Activity'
import { ListActivity } from './activityList'

interface Props {
  cantShowActivity?: number
  activities: ActivityList
}

interface Activity {
  id: string
  name: string
}

export const Activity = ({ activities, cantShowActivity }: Props) => {
  return (
    <div className='flex flex-col gap-5 mb-[20px] '>
      <Search placeholder='Buscar en tu actividad' />
      <Card
        title='Actividad'
        nextTitlePage='Ver toda tu actividad'>
        <ListActivity
          activities={activities}
          cantShowActivity={cantShowActivity}
        />
      </Card>
    </div>
  )
}
