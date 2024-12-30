'use client'
import React from 'react'
import { Card } from '../common'
import { Search } from '../shared/search'
import { ActivityItem } from '@/interfaces/I_Activity'
import { ListActivity } from './activityList'

interface Props {
  activities: ActivityItem[]
}

interface Activity {
  id: string
  name: string
}

const NUMEBER_OF_ACTIVITY = 10

export const Activity = ({ activities }: Props) => {
  return (
    <div className='flex flex-col gap-5 mb-[20px] z-20'>
      <Search placeholder='Buscar en tu actividad' />
      <Card
        title='Actividad'
        nextTitlePage='Ver toda tu actividad'
        path='/activity'>
        <ListActivity
          activities={activities}
          numberOfActivity={NUMEBER_OF_ACTIVITY}
        />
      </Card>
    </div>
  )
}
