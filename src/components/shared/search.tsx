'use client'
import React, { useSearchParams, usePathname, useRouter } from 'next/navigation'
import { IoSearch } from 'react-icons/io5'
import { useDebouncedCallback } from 'use-debounce'

interface Props {
  placeholder: string
}

export const Search = ({ placeholder }: Props) => {
  const searchParams = useSearchParams()
  const { replace } = useRouter()
  const pathname = usePathname()

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams)

    if (term) {
      params.set('query', term)
    } else {
      params.delete('query')
    }

    replace(`${pathname}?${params.toString()}`)
  }, 500)

  return (
    <div className='relative flex flex-1 flex-shrink-0'>
      <label
        htmlFor='search'
        className='sr-only'>
        Search
      </label>
      <input
        type='text'
        name='search'
        id='search'
        placeholder={placeholder}
        onChange={(e) => {
          handleSearch(e.target.value)
        }}
        defaultValue={searchParams.get('query')?.toString()}
        className='text-1 shadow-sm h-[64px] peer block w-full rounded-xl border-2 border-gray-200 pl-10 text-sm outline-2 placeholder:text-gray-500 focus:border-primaryActive focus:border-2  focus:ring-primaryActive  focus:outline-none transition-all duration-150 ease-linear'
      />
      <div className='absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 peer-focus:text-gray-800'>
        <IoSearch className='text-gray-500' />
      </div>
    </div>
  )
}
