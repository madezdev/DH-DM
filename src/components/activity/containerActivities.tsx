'use client'
import { useFilteredActivity } from '@/hooks/useFilteredActivity'
import { usePagination } from '@/hooks/usePaginations'
import React from 'react'
import { PiSlidersHorizontalLight } from 'react-icons/pi'
import { ListActivity } from './activityList'
import { ActivityItem } from '@/interfaces/I_Activity'

interface Props {
  activities: ActivityItem[]
}

const ITEMS_PER_PAGE = 20

export const ContainerActivities = ({ activities }: Props) => {
  const {
    filteredActivityList,
    searchInput,
    selectedFilter,
    handleSearchInputChange,
    handleSearchInputKeyDown,
    handleFilterChange,
    clearFilters,
  } = useFilteredActivity(activities)
  // Hook para la paginación
  const { currentItems, currentPage, totalPages, paginate } = usePagination(
    filteredActivityList,
    ITEMS_PER_PAGE
  )

  return (
    <article className={`w-full bg-[#FFF] rounded-lg shadow flex flex-col p-4`}>
      <div className='flex justify-between items-center'>
        <h3 className='heading-2'>Actividad</h3>
        <button
          className='flex items-center gap-2 text-[#000]'
          onClick={() => {
            console.log('Click filtros')
          }}>
          <span className='button-3'>Filtros</span>
          <PiSlidersHorizontalLight className='text-[20px]' />
        </button>
      </div>
      <ListActivity activities={currentItems} rowHeight={'tall'}/>
    </article>
  )
}
