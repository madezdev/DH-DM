import React, { useEffect, useState } from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import { ContainerBlackCard } from '../common/containerBlackCard'
import { Button, InputForm } from '../shared'
import { FiArrowRight } from 'react-icons/fi'

interface Props {
  handleNextStep: () => void
  handleBackStep: () => void
}

export const AddAmount = ({ handleNextStep, handleBackStep }: Props) => {
  const [isButtonDisabled, setIsButtonDisabled] = useState(false)
  const { control, watch } = useFormContext()
  const amount = watch('amount')

  useEffect(() => {
    setIsButtonDisabled(!amount || amount <= 0)
  }, [amount])

  return (
    <section className={`flex flex-col h-full`}>
      <button
        onClick={handleBackStep}
        className='flex items-center gap-x-1 text-secondary heading-3 mt-[80px] mb-[16px]'>
        <FiArrowRight className='w-[1.25rem] h-[1.25rem]' />
        Cargar dinero
      </button>
      <div className='flex flex-col gap-4'>
        <ContainerBlackCard
          title='¿Cuánto querés ingresar a la cuenta?'
          childrenClassName={'mb-[20px]'}>
          <Controller
            name='amount'
            control={control}
            rules={{
              required: 'El monto es obligatorio',
              min: { value: 1, message: 'El monto debe ser mayor a 0' },
            }}
            render={({ field, fieldState: { error } }) => (
              <div>
                <InputForm
                  {...field}
                  type='number'
                  autoFocus
                  placeholder='$0.00'
                />
                {error && (
                  <p className='text-red-500 text-sm mt-2'>{error.message}</p>
                )}
              </div>
            )}
          />
        </ContainerBlackCard>
        <div className='flex justify-end'>
          <Button
            type='button'
            title='Continuar'
            state={isButtonDisabled ? 'disabled' : 'default'}
            disabled={isButtonDisabled}
            className='py-5 w-[165px]'
            onClick={handleNextStep}
          />
        </div>
      </div>
    </section>
  )
}
