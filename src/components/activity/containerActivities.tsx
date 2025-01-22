'use client'
import { useFilteredActivity } from '@/hooks/useFilteredActivity'
import { usePagination } from '@/hooks/usePaginations'
import React from 'react'
import { PiSlidersHorizontalLight } from 'react-icons/pi'
import { ListActivity } from './activityList'
import { ActivityItem } from '@/interfaces/I_Activity'
import { ActivityRow } from './activityRow'
import clsx from 'clsx'
import { useFilterStore } from '@/store/filter.store'

interface Props {
  activities: ActivityItem[]
  hasOptionsActivity?: boolean
  hasPagination?: boolean
}

const ITEMS_PER_PAGE = 10

export const ContainerActivities = ({
  activities,
  hasOptionsActivity,
  hasPagination,
}: Props) => {
  const openFilter = useFilterStore((state) => state.openFilter)
  const closeFilter = useFilterStore((state) => state.closeFilter)
  const isOpenFilter = useFilterStore((state) => state.isOpenFilter)
  console.log('isOpenFilter', isOpenFilter)

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
    <div>
      {/* {hasOptionsActivity && (
					<OptionsFilter
						options={FILTER_OPTIONS}
						selectedFilter={selectedFilter}
						handleFilterChange={handleFilterChange}
						clearFilters={clearFilters}
					/>
				)} */}
      <section className='w-full px-5 flex flex-col gap-5 rounded-md bg-white text-black shadow-md md:p-10 xl:p-15'>
        <div className='h-[63px] flex justify-between items-center border-b border-secondary'>
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
        <div className='flex flex-col gap-5'>
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
            <li>No se encontraron actividades</li>
          )}
        </div>

        {hasPagination && totalPages > 1 && (
          <div className='flex justify-center mt-5'>
            {totalPages > 0 &&
              Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index + 1}
                  className={clsx(
                    'px-4 py-2 mx-1 rounded-lg text-black text-base font-bold',
                    {
                      'bg-tertiary': index + 1 === currentPage,
                      'bg-transparent hover:bg-tertiary':
                        index + 1 !== currentPage,
                    }
                  )}
                  onClick={() => paginate(index + 1)}>
                  {index + 1}
                </button>
              ))}
          </div>
        )}
      </section>
      {isOpenFilter && (
        <div
          className='fixed inset-0 bg-black bg-opacity-50 z-30'
          onClick={() => {
            closeFilter()
          }}></div>
      )}
    </div>
    // <article className={`w-full bg-[#FFF] rounded-lg shadow flex flex-col p-4`}>

    //   {/* <div className='flex justify-between items-center'>
    //     <h3 className='heading-2'>Actividad</h3>
    //     <button
    //       className='flex items-center gap-2 text-[#000]'
    //       onClick={() => {
    //         console.log('Click filtros')
    //       }}>
    //       <span className='button-3'>Filtros</span>
    //       <PiSlidersHorizontalLight className='text-[20px]' />
    //     </button>
    //   </div> */}
    //   {/* <ListActivity activities={currentItems} rowHeight={'tall'}/> */}
    // </article>
  )
}
