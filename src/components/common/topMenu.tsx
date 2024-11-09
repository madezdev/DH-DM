import React from 'react'
import { Avatar } from '../shared'
import Link from 'next/link'
import Image from 'next/image'
import { getAccount } from '@/services/S_getAcountInfo'
import { getUser } from '@/services/S_user'

export const TopMenu = async () => {
  const accountInfo = await getAccount()
  const { firstname, lastname } = await getUser(accountInfo.user_id)

  return (
    <header className='flex items-center justify-between p-4 h-[64px] px-[4vw] w-full fixed top-0 z-50 bg-secondary'>
      <Link href='/'>
        <Image
          src={`/images/logo/Logo-short.svg`}
          width={46}
          height={33}
          alt='Digital Money'
        />
      </Link>
      <div className='flex items-center gap-1'>
        <Avatar
          name={firstname}
          lastname={lastname}
        />
      </div>
    </header>
  )
}
