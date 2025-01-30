'use client'
import React from 'react'
import clsx from 'clsx'
import { useSearchParams } from 'next/navigation'
import { useFilteredActivity } from '@/hooks/useFilteredActivity'
import { useFilterStore } from '@/store/filter.store'
import { usePagination } from '@/hooks/usePaginations'
import { PiSlidersHorizontalLight } from 'react-icons/pi'
import { ActivityItem } from '@/interfaces/I_Activity'
import { ActivityRow } from './activityRow'
import { OptionsFilter } from './optionsFilter'
import { FaMoneyBillTransfer } from 'react-icons/fa6'

interface Props {
  activities: ActivityItem[]
  hasPagination?: boolean
}

const ITEMS_PER_PAGE = 10

export const ContainerActivities = ({ activities, hasPagination }: Props) => {
  const openFilter = useFilterStore((state) => state.openFilter)
  const closeFilter = useFilterStore((state) => state.closeFilter)
  const isOpenFilter = useFilterStore((state) => state.isOpenFilter)

  const searchParams = useSearchParams()
  const queryParam = searchParams.get('query') || ''

  const filteredActivities = activities.filter((activity) =>
    activity.description.toLowerCase().includes(queryParam.toLowerCase())
  )

  const {
    filteredActivityList,
    selectedFilter,
    handleFilterChange,
    clearFilters,
  } = useFilteredActivity(filteredActivities)

  // Hook para la paginación
  const { currentItems, currentPage, totalPages, paginate } = usePagination(
    filteredActivityList,
    ITEMS_PER_PAGE
  )

  return (
    <>
      <section className='w-full min-h-[calc(100dvh-290px)] px-5 flex flex-col rounded-md bg-white text-black shadow-md mb-[60px]'>
        <div className='h-[63px] flex justify-between items-center '>
          <span className='heading-3'>Tu actividad</span>
          <button
            className='flex items-center gap-2 text-[#000]'
            onClick={() => {
              openFilter()
            }}>
            <span className='button-1'>Filtros</span>
            <PiSlidersHorizontalLight className='text-[20px]' />
          </button>
        </div>

        <>
          {currentItems.length > 0 ? (
            currentItems.map((activity) => (
              <ActivityRow
                key={activity.id}
                transfer={activity.description}
                amount={activity.amount}
                date={activity.dated}
                rowHeight={'tall'}
              />
            ))
          ) : (
            <div className='flex items-center gap-2 w-full h-full justify-center mb-4 flex-1'>
              <span>No se encontraron actividades</span>
              <FaMoneyBillTransfer />
            </div>
          )}
        </>

        {hasPagination && totalPages > 1 && (
          <div className='flex justify-center my-5'>
            {Array.from({ length: totalPages }, (_, index) => {
              const isActive = index + 1 === currentPage

              return (
                <button
                  key={index + 1}
                  className={clsx(
                    'px-4 py-2 mx-1 rounded-lg text-base font-bold transition-colors',
                    isActive
                      ? 'bg-black/20 text-black' // Color para la página activa
                      : 'bg-white' // Color para las demás páginas
                  )}
                  onClick={() => paginate(index + 1)}>
                  {index + 1}
                </button>
              )
            })}
          </div>
        )}
      </section>
      {isOpenFilter && (
        <div
          className='fixed inset-0 bg-black bg-opacity-50 z-10 flex flex-col items-center justify-center'
          onClick={() => {
            closeFilter()
          }}>
          <div
            className='w-full max-w-[330px] z-30'
            onClick={(e) => e.stopPropagation()}>
            <OptionsFilter
              selectedFilter={selectedFilter}
              handleFilterChange={handleFilterChange}
              clearFilters={clearFilters}
            />
          </div>
        </div>
      )}
    </>
  )
}
