import React from 'react'
import { LiaSpinnerSolid } from 'react-icons/lia'

export default function Loading() {
  return (
    <div className='flex flex-col justify-center items-center w-full h-full'>
      <div className='flex items-center justify-center gap-4'>
        <p>Cargando ...</p>
        <LiaSpinnerSolid className='bg-primary animate-spin' />
      </div>
    </div>
  )
}
