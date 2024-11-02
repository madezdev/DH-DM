'use client'
import React, { useState } from 'react'
import copy from 'copy-to-clipboard'
import { IoCheckmarkDoneOutline, IoCopyOutline } from 'react-icons/io5'

interface Props {
  title: string
  value: string
}

export const ButtonCopy = ({ title, value }: Props) => {
  const [isCopied, setIsCopied] = useState(false)
  const handleCopy = () => {
    setIsCopied(true)
    copy(value)
    setTimeout(() => {
      setIsCopied(false)
    }, 2000)
  }

  return (
    <div className='flex flex-col'>
      <div className='flex justify-between items-center w-full'>
        <h3 className='text-primary text-[20px] font-bold'>{title}</h3>
        <button onClick={handleCopy}>
          {!isCopied ? <IoCopyOutline className='text-primary text-[20px]'/> : <span className='text-primary text-[20px] font-bold'><IoCheckmarkDoneOutline /></span>}
        </button>
      </div>
      <p className='text-white text-[16px] font-light'>{value}</p>
    </div>
  )
}