import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm, Controller } from 'react-hook-form'
import { InputForm } from '../common'
import { Button, LoadingIcon } from '../shared'
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
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='flex flex-col items-center gap-4 w-full'>
        <Controller
          name='password'
          control={control}
          render={({ field }) => (
            <InputForm
              {...field}
              id='password'
              type='password'
              placeholder='Correo*'
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
    </div>
  )
}
