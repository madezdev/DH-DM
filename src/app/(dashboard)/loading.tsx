import React from 'react'
import { LiaSpinnerSolid } from 'react-icons/lia'

export default function Loading() {
  return (
    <div className='flex flex-col justify-center items-center w-full h-[100dvh]'>
      <div className='flex flex-col items-center justify-center gap-4'>
        <p>Cargando</p>
        <LiaSpinnerSolid className='text-black text-[40px] animate-spin'/>
      </div>
    </div>
  )
}
