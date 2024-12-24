import React from 'react'
import Image from 'next/image'
import { CardHome, Footer, Topbar } from '@/components'
import { cardLandoPage } from '@/utils/landingPage'

export default function HomePage() {
  return (
    <div className='relative h-[100dvh] w-full flex flex-col justify-between'>
      <Topbar session={'landing'} />
      <div className=' flex-grow flex flex-col justify-between w-full'>
        <Image
          src='/images/landing.png'
          alt='Digital Money'
          width={1000}
          height={1000}
          className='object-cover object-center absolute top-0 left-0 z-[-1] w-full h-full md:hidden'
        />

        <Image
          src='/images/landing-xxl.png'
          alt='Digital Money'
          fill
          objectFit='cover'
          objectPosition='center'
          className=' absolute z-[-1] hidden md:block'
        />

        <article className='mx-[4vw] flex flex-col justify-center gap-4'>
          <div className='mt-[84px] xl:mt-[74px]'>
            <h1 className='text-white text-[27px] md:text-[48px] font-light leading-tight w-[190px] md:w-[418px]'>
              De ahora en adelante, hacés más con tu dinero.
            </h1>
          </div>
          <div className='bg-primary h-[4px] w-6' />
          <div className='w-[180px] md:w-[420px]'>
            <h2 className='text-primary text-[21.50px] font-light md:text-[34px] '>
              Tu nueva <strong className='font-bold'>billetera virtual</strong>
            </h2>
          </div>
        </article>
        <article className='bg-primary w-full h-[329px] md:h-[430px] xl:h-[148px] rounded-t-3xl relative'>
          <div className='px-[4vw] md:px-[14vw] xl:px-0 absolute left-0 -top-16 md:-top-20 xl:-top-32 flex flex-col xl:flex-row xl:justify-center gap-4 md:gap-8 w-full'>
            {cardLandoPage.map((card, index) => {
              return <CardHome key={index} title={card.title} description={card.description} />
            })}
          </div>
        </article>
      </div>
      <Footer />
    </div>
  )
}
