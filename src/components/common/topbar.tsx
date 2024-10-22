import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'
import { getTokenFromCookie } from '@/utils/getTokenCookie'
import { getAcountInfo } from '@/services/S_getAcountInfo'
import { getUserInfo } from '@/services/S_user'
import { Avatar, ButtonNavbar } from '../shared'

interface Props {
  session: 'register' | 'login' | 'empty' | 'menu' | 'landing'
}

export const Topbar = async ({ session }: Props) => {
  const token = await getTokenFromCookie()
  const accountInfo = await getAcountInfo(token)
  const { firstname, lastname } = await getUserInfo(
    accountInfo.user_id,
    token,
    'user-info'
  )
 
  return (
    <header
      className={clsx(
        `flex items-center justify-between p-4 h-[64px] px-[4vw] w-full fixed top-0 z-50`,
        {
          'bg-secondary':
            session === 'login' || session === 'menu' || session === 'landing',
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
      {session === 'menu' && (
        <div className='flex items-center gap-1'>
          <Avatar
            name={firstname}
            lastname={lastname}
          />
        </div>
      )}
    </header>
  )
}
