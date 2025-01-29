'use client'
import React from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import { useFilterStore } from '@/store/filter.store' // Asegúrate de importar correctamente el store

export const FILTER_OPTIONS = [
  { label: 'Hoy', value: 'today' },
  { label: 'Ayer', value: 'yesterday' },
  { label: 'Última semana', value: 'lastWeek' },
  { label: 'Últimos 15 días', value: 'last15Days' },
  { label: 'Último mes', value: 'lastMonth' },
  { label: 'Último año', value: 'lastYear' },
]

export const OptionsFilter = () => {
  const [selectedOption, setSelectedOption] = React.useState('')
  const closeFilter = useFilterStore((state) => state.closeFilter) // Usamos el store para cerrar el filtro

  const handleOptionChange = (value: string) => {
    setSelectedOption(value)
    console.log('Filter changed to:', value)

    // Cerramos el filtro después de 2 segundos
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
          onClick={() => {
            console.log('clear filters')
            setSelectedOption('') // Limpia la opción seleccionada
          }}>
          Borrar filtros
        </button>
      </div>

      <div>
        {FILTER_OPTIONS.map((option, index) => {
          return (
            <div
              key={index}
              className='flex items-center gap-2 py-2 cursor-pointer'
              onClick={() => handleOptionChange(option.value)}>
              <input
                type='radio'
                name='filter'
                id={option.value}
                value={option.value}
                checked={selectedOption === option.value}
                onChange={() => handleOptionChange(option.value)}
              />
              <label htmlFor={option.value}>{option.label}</label>
            </div>
          )
        })}
      </div>
    </div>
  )
}
