'use client'
import { useRouter } from 'next/navigation'
import { FiArrowRight } from 'react-icons/fi'

interface Props {
  title: string
}

export const Header = ({ title }: Props) => {
  const router = useRouter()
  return (
    <button
      onClick={() => {
        router.back()
      }}
      className='flex items-center gap-x-1 text-secondary heading-3 mt-5'>
      <FiArrowRight className='w-[1.25rem] h-[1.25rem]' />
      {title}
    </button>
  )
}
