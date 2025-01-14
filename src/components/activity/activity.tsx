'use client'
import React from 'react'
import { Card } from '../common'
import { Search } from '../shared/search'
import { ListActivity } from './activityList'
import { ActivityItem } from '@/interfaces/I_Activity'

interface Props {
  activities: ActivityItem[]
}

const NUMEBER_OF_ACTIVITY = 20

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
