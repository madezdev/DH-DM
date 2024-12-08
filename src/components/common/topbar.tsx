import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'
// import { getAccount } from '@/services/S_getAcountInfo'
import {  ButtonNavbar } from '../shared'
// import { getUser } from '@/services/S_user'

interface Props {
  session: 'register' | 'login' | 'empty' | 'landing'
}

export const Topbar = async ({ session }: Props) => {
  // const accountInfo = await getAccount()
  // const { firstname, lastname } = await getUser(accountInfo.user_id)

  return (
    <header
      className={clsx(
        `flex items-center justify-between p-4 h-[64px] px-[4vw] w-full fixed top-0 z-50`,
        {
          'bg-secondary':
            session === 'login' || session === 'landing',
          'bg-primary': session === 'empty' || session === 'register',
        }
      )}>
      <Link href='/'>
        <Image
          src={`/images/logo/${
            session === 'empty' || session === 'register'
              ? 'Logo-short-black'
              : 'Logo-short'
          }.svg`}
          width={46}
          height={33}
          alt='Digital Money'
        />
      </Link>
      {session === 'landing' && (
        <div className='flex items-center gap-5'>
          <Link href='/login'>
            <ButtonNavbar
              title='Ingresar'
              state='default'
              outline={true}
            />
          </Link>
          <Link href='/signup'>
            <ButtonNavbar
              title='Crear cuenta'
              state='default'
            />
          </Link>
        </div>
      )}
      {session === 'register' && (
        <div className='flex items-center gap-5'>
          <Link href='/login'>
            <ButtonNavbar
              title='Ingresar'
              state='secondary'
              outline={true}
            />
          </Link>
        </div>
      )}
    </header>
  )
}
