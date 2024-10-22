import React from 'react'
import { ActivityRow } from './activityRow'
import { ActivityList as IActivityList } from '@/interfaces/I_Activity'

interface Props {
  activities: IActivityList
  cantShowActivity?: number
}

const list = [
  {
    id: 1,
    transfer: 'Transferiste a Rodrigo',
    amount: -1265.57,
    date: new Date(),
  },
  {
    id: 2,
    transfer: 'Transfereriste a Consorcio',
    amount: -1265.57,
    date: new Date(),
  },
  {
    id: 3,
    transfer: 'Ingresaste dinero',
    amount: 1265.57,
    date: new Date(),
  },
  {
    id: 4,
    transfer: 'Te transfirieron dinero',
    amount: 10000,
    date: new Date(),
  },
]

export const ActivityList = async ({ activities, cantShowActivity }: Props) => {
  const showActivities = Array.isArray(activities)
    ? activities.slice(0, cantShowActivity)
    : []
  console.log(showActivities)

  return (
    <div className='flex flex-col gap-2 justify-center h-[236px] mt-4'>
      {list.map((item) => (
        <ActivityRow
          key={item.id}
          transfer={item.transfer}
          amount={item.amount}
          date={item.date.toISOString()}
        />
      ))}
    </div>
  )
}
