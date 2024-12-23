import React from 'react'
import { useRouter } from 'next/navigation'
import { useFormContext } from 'react-hook-form'
import { format } from '@formkit/tempo'
import { Button, CurrencyFormat } from '../shared'
import { FiArrowRight } from 'react-icons/fi'
import { IoIosCheckmarkCircleOutline } from 'react-icons/io'
import { ContainerBlackCard } from '../common/containerBlackCard'

interface Props {
  handleBackStep: () => void
  cvu: string
}

export const SuccessOperation = ({ handleBackStep, cvu }: Props) => {
  const { getValues } = useFormContext()
  const { amount } = getValues()
  const router = useRouter()
  const date = new Date()
  const today = format(date, 'D MMMM YYYY')
  const hour = format(date, 'HH:mm')

  return (
    <section className='flex flex-col h-full '>
      <button
        onClick={() => {
          handleBackStep()
        }}
        className='flex items-center gap-x-1 text-secondary heading-3 mt-[80px] mb-[16px]'>
        <FiArrowRight className='w-[1.25rem] h-[1.25rem]' />
        Cargar dinero
      </button>
      <div className='flex flex-col gap-5'>
        <div className='flex flex-col justify-center items-center gap-4 bg-primary p-5 rounded-lg'>
          <IoIosCheckmarkCircleOutline className='text-[48px]' />
          <p className='heading-3'>Ya cargamos el dinero en tu cuenta</p>
        </div>
        <ContainerBlackCard
          title='Revisá que está todo bien'
          className='p-5'>
          <div className='border border-disable' />
          <div className='flex flex-col gap-2 my-5'>
            <div className='flex items-center gap-4'>
              <p className='text-white text-2'>
                {today} a {hour} hs
              </p>
            </div>
            <span className='text-white button-2'>
              <CurrencyFormat value={amount} />
            </span>
          </div>
          <div className='flex flex-col gap-4 mb-[40px]'>
            <div className='flex flex-col gap-2'>
              <span className='text-2 text-white'>Para</span>
              <p className='heading-2 text-white'>Cuenta propia</p>
            </div>
            <div className='flex flex-col gap-2'>
              <span className='text-2 text-white'>Brubank</span>
              <p className='text-2 text-white'>CVU {cvu}</p>
            </div>
          </div>
        </ContainerBlackCard>
      </div>
      <div className='mt-5'>
        <Button
          type='button'
          title='Descargar comprobante'
          state={'default'}
          disabled={false}
          className='py-5 w-full font-bold'
        />
      </div>
      <div className='my-5'>
        <Button
          type='button'
          title='Ir al inicio'
          state={'disabled'}
          disabled={false}
          className='py-5 w-full font-bold'
          onClick={() => {
            router.push('/home')
          }}
        />
      </div>
    </section>
  )
}
