import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'
import { Button } from './button'

interface Props {
  session: 'register' | 'login' | 'empty' | 'menu' | 'landing'
}

export const Navbar = ({ session }: Props) => {
  return (
    <nav
      className={clsx(
        `flex items-center justify-between p-4 h-[64px] px-[4vw] w-full `,
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
            <Button
              title='Ingresar'
              state='default'
              outline={true}
            />
          </Link>
          <Link href='/signup'>
            <Button
              title='Crear cuenta'
              state='default'
            />
          </Link>
        </div>
      )}
      {session === 'register' && (
        <div className='flex items-center gap-5'>
          <Link href='/login'>
            <Button
              title='Ingresar'
              state='secondary'
              outline={true}
            />
          </Link>
        </div>
      )}
      {session === 'menu' && (
        <div className='flex items-center gap-5'>
          <p>menu</p>
        </div>
      )}
    </nav>
  )
}
