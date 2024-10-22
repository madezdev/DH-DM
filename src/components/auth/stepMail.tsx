'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import { useForm, Controller } from 'react-hook-form'
import { Cookie } from '@/interfaces/I_cookie'
import { Button, InputForm } from '../shared'
import { zodResolver } from '@hookform/resolvers/zod'
import { emailSchema } from '@/shema/login'

interface Props {
  onSubmit: (data: { email: string }) => void
  isSignupSuccess: Cookie | undefined
}

export const StepMail = ({ onSubmit }: Props) => {
  const router = useRouter()
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(emailSchema),
    defaultValues: {
      email: '',
    },
  })

  return (
    <section className='flex flex-col items-center justify-center gap-4 w-full h-full'>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='flex flex-col items-center justify-center gap-4 w-full h-full'>
        <h2 className='heading-2 text-white'>¡Hola! Ingresá tu e-mail</h2>
        <Controller
          name='email'
          control={control}
          render={({ field }) => (
            <InputForm
              {...field}
              id='email'
              type='email'
              placeholder='Correo*'
              error={errors.email?.message}
            />
          )}
        />
        <Button
          type='submit'
          title='Continuar'
          state='default'
          disabled={false}
          className='w-[300px] lg:w-[328px] xl:w-[360px] px-5 py-[20px]'
        />
        <Button
          title='Crear cuenta'
          state='disabled'
          disabled={false}
          onClick={() => router.push('/signup')}
          className='w-[300px] lg:w-[328px] xl:w-[360px] px-5 py-[20px]'
        />
      </form>
    </section>
  )
}
