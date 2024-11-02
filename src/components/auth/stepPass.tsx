import React from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, Controller } from 'react-hook-form'
import { Button, InputForm, LoadingIcon } from '../shared'
import { passwordSchema } from '@/shema/login'

interface Props {
  onSubmit: (data: { password: string }) => void
}

export const StepPass = ({ onSubmit }: Props) => {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(passwordSchema),
    defaultValues: {
      password: '',
    },
  })

  return (
    <section className='flex flex-col items-center justify-center gap-4 w-full h-full'>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='flex flex-col items-center gap-4 w-full'>
        <h1 className='heading-2 text-center text-white'>
          Ingresa tu contraseña
        </h1>
        <Controller
          name='password'
          control={control}
          render={({ field }) => (
            <InputForm
              {...field}
              id='password'
              type='password'
              placeholder='Contraseña*'
              error={errors.password?.message}
            />
          )}
        />
        <Button
          title={isSubmitting ? 'Cargando...' : 'Continuar'}
          icon={isSubmitting ? <LoadingIcon className='w-6 h-6' /> : null}
          type='submit'
          state='default'
          disabled={false}
          className='w-[300px] lg:w-[328px] xl:w-[360px] px-5 py-[20px]'
        />
      </form>
    </section>
  )
}
