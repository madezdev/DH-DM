import { Button } from '@/components'
import Image from 'next/image'
import Link from 'next/link'

export default function SuccessPage() {
  return (
    <main className='flex flex-col justify-center items-center gap-16 w-full h-full'>
      <section className='flex flex-col justify-between items-center gap-8'>
        <h1 className='text-[32px] xl:text-[64px] text-white'>
          Registro Exitoso
        </h1>
        <Image
          src='/images/Check.svg'
          width={80}
          height={80}
          alt='Registro Exitoso'
        />
        <small className='text-white text-[12px] xl:text-[16px] w-[240px] xl:w-[470px] text-center'>
          Hemos enviado un correo de confirmación para validar tu email, por
          favor revisalo para iniciar sesión.
        </small>
      </section>
      <Link href='/auth/login'>
        <Button
          title='Continuar'
          state='default'
          disabled={false}
          className='w-[300px] lg:w-[328px] xl:w-[360px] px-5 py-[20px]'
        />
      </Link>
    </main>
  )
}
