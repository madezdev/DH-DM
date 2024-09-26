import Image from 'next/image'
import { Card, Footer, Navbar } from '@/components'

export default function HomePage() {
  return (
    <div className='relative h-full w-full flex flex-col justify-between'>
      <Navbar session={'landing'} />
      <div className=' flex-grow flex flex-col justify-between'>
        <Image
          src='/images/landing.png'
          alt='Digital Money'
          width={1000}
          height={1000}
          className='object-cover object-center absolute -top-10 left-0 z-[-1] w-full h-full md:hidden'
        />

        <Image
          src='/images/landing-xxl.png'
          alt='Digital Money'
          fill
          className='object-cover object-top absolute top-0 left-0 z-[-1] w-full h-full hidden md:block'
        />

        <article className='mx-[4vw] flex flex-col justify-center gap-4'>
          <div className='mt-[44px] xl:mt-[74px]'>
            <h1 className='text-white text-[27px] md:text-[48px] leading-tight w-[190px] md:w-[418px]'>
              De ahora en adelante, hacés más con tu dinero.
            </h1>
          </div>
          <div className='bg-primary h-[4px] w-6' />
          <div className='w-[148px] xl:w-[420px]'>
            <h2 className='text-primary text-[21.50px] md:text-[34px] '>
              Tu nueva <strong>billetera virtual</strong>
            </h2>
          </div>
        </article>
        <article className='bg-primary w-full h-[280px] md:h-[430px] xl:h-[148px] rounded-t-3xl relative'>
          <div className='px-[4vw] md:px-[14vw] xl:px-0 absolute left-0 -top-16 md:-top-20 xl:-top-32 flex flex-col xl:flex-row xl:justify-center gap-4 xl:gap-8 w-full'>
            <Card
              title='Transferí dinero'
              description='Desde Digital Money House vas a poder transferir dinero a otras cuentas, así como también recibir transferencias y nuclear tu capital en nuestra billetera virtual.'
            />
            <Card
              title='Pago de servicios'
              description='Pagá mensualmente los servicios en 3 simples clicks. Fácil, rápido y conveniente. Olvidate de las facturas en papel.'
            />
          </div>
        </article>
      </div>
      <Footer />
    </div>
  )
}
