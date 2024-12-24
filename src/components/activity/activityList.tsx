import React from 'react'
import { ActivityRow } from './activityRow'
import { ActivityList } from '@/interfaces/I_Activity'

interface Props {
  activities: ActivityList
  cantShowActivity?: number
}

export const ListActivity = ({ activities, cantShowActivity }: Props) => {
  const showActivities = Array.isArray(activities)
    ? activities.slice(0, cantShowActivity)
    : []
  return (
    <div className='flex flex-col gap-2 justify-center mt-4'>
      {showActivities?.map((item) => (
        <ActivityRow
          key={item.id}
          transfer={item.description}
          amount={item.amount}
          date={item.dated}
        />
      ))}
    </div>
  )
}
