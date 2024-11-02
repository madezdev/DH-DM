'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import clsx from 'clsx'
import { removeCookieClient } from '@/utils/cookieClient'
import { navbarPaths } from '@/constants/navbarPaths'

export const Sidebar = () => {
  const router = useRouter()
  const pathname = usePathname()

  const handleLogout = () => {
    removeCookieClient('authToken')
    localStorage.removeItem('acc_token')
    router.push('/')
  }

  return (
    <aside
      id='sidebar'
      className='hidden h-full z-40 top-[64px] fixed xl:relative xl:block xl:h-[calc(100vh-128px)] w-[276px] bg-primary'>
      <div className='pt-[100px] w-full h-full pl-10 flex flex-col gap-5 items-start text-black'>
        <Link
          href='/home'
          className={clsx('text-base', {
            'font-extrabold': pathname === navbarPaths.home,
          })}>
          Inicio
        </Link>
        <Link
          href='/activity'
          className={clsx('text-base', {
            'font-extrabold': pathname === navbarPaths.activity,
          })}>
          Actividad
        </Link>
        <Link
          href='/profile'
          className={clsx('text-base', {
            'font-extrabold': pathname === navbarPaths.profile,
          })}>
          Tu perfil
        </Link>
        <Link
          href='/deposit'
          className={clsx('text-base', {
            'font-extrabold':
              pathname === navbarPaths.deposit ||
              pathname === navbarPaths.depositCard ||
              pathname === navbarPaths.depositBank,
          })}>
          Cargar dinero
        </Link>
        <Link
          href='/payment'
          className={clsx('text-base', {
            'font-extrabold': pathname === navbarPaths.payment,
          })}>
          Pagar servicios
        </Link>
        <Link
          href='/cards'
          className={clsx('text-base', {
            'font-extrabold': pathname === navbarPaths.cards,
          })}>
          Tarjetas
        </Link>
        <button
          className='opacity-60'
          onClick={handleLogout}>
          Cerrar sesión
        </button>
      </div>
    </aside>
  )
}
