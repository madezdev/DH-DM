'use client'
import React, { ChangeEvent } from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import { useFilterStore } from '@/store/filter.store'

export const FILTER_OPTIONS = [
  { label: 'Hoy', value: 'today' },
  { label: 'Ayer', value: 'yesterday' },
  { label: 'Última semana', value: 'lastWeek' },
  { label: 'Últimos 15 días', value: 'last15Days' },
  { label: 'Último mes', value: 'lastMonth' },
  { label: 'Último año', value: 'lastYear' },
]

interface OptionsFilterProps {
  selectedFilter: string
  handleFilterChange: (e: ChangeEvent<HTMLInputElement>) => void
  clearFilters?: () => void
}

export const OptionsFilter = ({
  selectedFilter,
  handleFilterChange,
  clearFilters,
}: OptionsFilterProps) => {
  const closeFilter = useFilterStore((state) => state.closeFilter) // Usamos el store para cerrar el filtro

  const handleOptionChange = () => {
    //setSelectedOption(value)

    setTimeout(() => {
      closeFilter()
    }, 1000)
  }

  return (
    <div className='z-50 bg-white px-5 py-2 rounded-md shadow-md w-full '>
      <div className='flex justify-between items-center h-[56px] border-b border-[#000/30]'>
        <span className='text-[#000] button-2 flex items-center gap-2'>
          Periodo
          <IoIosArrowDown />
        </span>
        <button
          className='text-1 text-black/50 '
          onClick={clearFilters}>
          Borrar filtros
        </button>
      </div>

      <div>
        {FILTER_OPTIONS.map((option, index) => {
          return (
            <div
              key={index}
              className='flex items-center gap-2 py-2 cursor-pointer'
              onClick={() => handleOptionChange()}>
              <input
                type='radio'
                name='filter'
                id={option.value}
                value={option.value}
                checked={selectedFilter === option.value}
                onChange={handleFilterChange}
              />
              <label htmlFor={option.value}>{option.label}</label>
            </div>
          )
        })}
      </div>
    </div>
  )
}
