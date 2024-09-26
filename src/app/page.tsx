import Image from 'next/image'

export default function HomePage() {
  return (
    <>
      {/* <Navbar /> */}
      <div className='flex flex-col flex-grow'>
        <section className='relative flex-grow flex flex-col justify-between'>
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

          <section className='w-full mx-[4vw] flex flex-col justify-center gap-4'>
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
          </section>
          <div className='bg-primary w-full h-[280px] md:h-[430px] xl:h-[148px] rounded-t-3xl relative'>
            <div className='px-[4vw] md:px-[14vw] xl:px-0 absolute left-0 -top-16 md:-top-20 xl:-top-32 flex flex-col xl:flex-row xl:justify-center xl:gap-8 w-full'>
              <div className='bg-white p-2 md:p-8 rounded-xl xl:w-[500px] xl:h-[246px] xl:p-[30px]'>
                <h3 className='text-[28px] md:text-[40px] border-b-2 border-primary'>
                  <strong>Transferí dinero</strong>
                </h3>
                <p className='text-[16px] md:text-[20px] mt-2'>
                  Desde Digital Money House vas a poder transferir dinero a
                  otras cuentas, así como también recibir transferencias y
                  nuclear tu capital en nuestra billetera virtual.
                </p>
              </div>
              <div className='bg-white p-2 md:p-8 rounded-xl mt-4 xl:mt-0 xl:w-[500px] xl:h-[246px] xl:p-[30px]'>
                <h3 className='text-[28px] md:text-[40px] border-b-2 border-primary'>
                  <strong>Pago de servicios</strong>
                </h3>
                <p className='text-[16px] md:text-[20px] mt-2'>
                  Pagá mensualmente los servicios en 3 simples clicks. Fácil,
                  rápido y conveniente. Olvidate de las facturas en papel.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* <Footer /> */}
    </>
  )
}
