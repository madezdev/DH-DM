'use client'
import React from 'react'
import { ActivityRow } from './activityRow'
import { ActivityItem } from '@/interfaces/I_Activity'

interface Props {
  activities: ActivityItem[]
  numberOfActivity?: number
  rowHeight?: 'short' | 'tall'
}

export const ListActivity = ({ activities, numberOfActivity, rowHeight }: Props) => {
  const showActivities = Array.isArray(activities)
    ? activities.slice(0, numberOfActivity)
    : []
  const reverseActivities = showActivities.reverse()
  return (
    <div className='flex flex-col gap-2 justify-center mt-4'>
      {reverseActivities?.map((item) => (
        <ActivityRow
          key={item.id}
          transfer={item.description}
          amount={item.amount}
          date={item.dated}
          rowHeight={rowHeight}
        />
      ))}
    </div>
  )
}
