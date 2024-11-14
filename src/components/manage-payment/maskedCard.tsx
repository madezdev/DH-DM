'use client'
import React, { useEffect, useState } from 'react'
import { PostCard } from '@/interfaces/I_Card'
import clsx from 'clsx'

interface Props {
  dataCard: PostCard
}

export const MaskedCard = ({ dataCard }: Props) => {
  const [number, setNumber] = useState<string[]>([])
  const { number_id, first_last_name, expiration_date } = dataCard

  const imgCard: { [key: string]: string } = {
    3: '/images/logo/amex.svg',
    4: '/images/logo/visa.svg',
    5: '/images/logo/mastercard.svg',
    6: '/images/logo/discover.svg',
  }

  const colorCard: { [key: string]: string } = {
    3: 'bg-[#001833]',
    4: 'bg-[#052A2D]',
    5: 'bg-[#151817]',
    6: 'bg-[#003166]',
  }

  const colorTextCard: { [key: string]: string } = {
    3: 'text-[#ffffff]',
    4: 'text-[#ffffff]',
    5: 'text-[#ffffff]',
    6: 'text-[#ffffff]'
  }

  const changeCardImage = (number_id: number) => {
    const firstNumber = number_id.toString().charAt(0)
    return imgCard[parseInt(firstNumber)]
  }

  useEffect(() => {
    if (number_id) {
      const normalizedNumber = number_id
        .toString()
        .padEnd(16, '*')
        .match(/.{1,4}/g)
      setNumber(normalizedNumber || [])
    } else {
      setNumber(['****', '****', '****', '****'])
    }
  }, [number_id])

  const formatExpirationDate = (expiration_date: string) => {
    if (expiration_date) {
      return expiration_date
        .replace(/[^0-9]/g, '')
        .replace(/(\d{2})(\d{2})/, '$1/$2')
    }
    return 'MM/YY'
  }

  return (
    <div
      className={clsx(
        'relavite w-full h-[192px] p-5 rounded-[8px] shadow-md flex flex-col justify-between z-10',
        {
          'bg-[#EEEAEA]': !number_id,
          [colorCard[number_id?.toString().charAt(0)]]: number_id,
        }
      )}>
      <div className='w-[42px] h-[32px] bg-[#D9D9D9] rounded-[5px] self-end'>
        {number_id && (
          <img
            src={changeCardImage(parseInt(number_id?.toString()))}
            alt='card'
            className='w-full h-full object-cover'
          />
        )}
      </div>
      <div className='bottom-4 left-4 z-20 text-black/50 w-full'>
        <div className='font-bold text-sm flex justify-between w-full'>
          {number &&
            number?.map((item, index) => (
              <span
                key={index}
                className={clsx('text-[18px] tracking-widest', {
                  'text-black/50': !number_id,
                  [colorTextCard[number_id?.toString().charAt(0)]]: number_id,
                })}>
                {item}
              </span>
            ))}
        </div>
        <div className='mt-2'>
          <p
            className={clsx('text-sm uppercase', {
              'text-black/50': !number_id,
              [colorTextCard[number_id?.toString().charAt(0)]]: number_id,
            })}>
            {first_last_name ? first_last_name : 'NOMBRE DEL TITULAR'}
          </p>
        </div>
        <div>
          <p
            className={clsx('text-sm', {
              'text-black/50': !number_id,
              [colorTextCard[number_id?.toString().charAt(0)]]: number_id,
            })}>
            {formatExpirationDate(expiration_date)}
          </p>
        </div>
      </div>
    </div>
  )
}
