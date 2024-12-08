import React from 'react'
interface Props {
  title: string
  description: string
}

export const CardHome = ({ title, description }: Props) => {
  return (
    <div className='bg-white p-4 md:p-[30px] rounded-[30px] xl:w-[500px] xl:h-[246px] xl:p-[30px]'>
      <h3 className='text-[28px] md:text-[40px] font-semibold border-b-2 border-primary'>
       {title}
      </h3>
      <p className='text-[16px] md:text-[20px] mt-2'>{description}</p>
    </div>
  )
}