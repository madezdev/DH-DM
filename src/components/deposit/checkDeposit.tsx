import React from 'react'
import { FiArrowRight } from 'react-icons/fi'
import { ContainerBlackCard } from '../common/containerBlackCard'
import { FaRegEdit } from 'react-icons/fa'
import { useFormContext } from 'react-hook-form'
import { Button, CurrencyFormat } from '../shared'

interface Props {
  handleBackStep: () => void
  cvu: string
}

export const CheckDeposit = ({
  handleBackStep,
  cvu,
}: Props) => {
  const { getValues } = useFormContext()
  const { amount } = getValues()
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
      <div>
        <ContainerBlackCard
          title='Revisá que está todo bien'
          className='p-5'>
          <div className='border border-disable' />
          <div className='flex flex-col gap-2 my-5'>
            <div className='flex items-center gap-4'>
              <p className='text-white text-2'>Vas a transferir</p>
              <button>
                <FaRegEdit
                  className='text-primary text-[24px]'
                  onClick={() => {
                    handleBackStep()
                  }}
                />
              </button>
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
      <div className='flex justify-end mt-5'>
        <Button
          type='submit'
          title='Continuar'
          state={'default'}
          disabled={false}
          className='py-5 w-[165px]'  
        />
      </div>
    </section>
  )
}
