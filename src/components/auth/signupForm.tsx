'use client'
import React, { useEffect, useState, useTransition } from 'react'
import { useRouter } from 'next/navigation'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button, InputForm } from '../shared'
import { Isignup } from '@/interfaces/I_signup'
import { setCookieClientRegisterSuccess } from '@/utils/cookieClient'
import { postSignup } from '@/services/S_postSignup'
import { signupSchema } from '@/shema/signup'

export const SignUpForm = () => {
  const [isPending, startTransition] = useTransition()
  const [isCompleted, setIsCompleted] = useState(false)
  const [isError, setIsError] = useState(false)
  const router = useRouter()
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
    watch
  } = useForm({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      firstname: '',
      lastname: '',
      dni: '',
      email: '',
      password: '',
      confirmPassword: '',
      phone: '',
    },
  })

  const firstname = watch('firstname', '')
  const lastname = watch('lastname', '')
  const dni = watch('dni', '')
  const email = watch('email', '')
  const phone = watch('phone', '')
  const password = watch('password', '')
  const confirmPassword = watch('confirmPassword', '')

  useEffect(() => {
    if (firstname && lastname && dni && email && phone && password && confirmPassword) {
      setIsCompleted(true)
    }
  }, [firstname, lastname, dni, email, phone, password, confirmPassword])

  const onSubmit = async (data: Isignup) => {
    const { dni } = data

    const body = {
      ...data,
      dni: Number(dni),
    }
    try {
      startTransition(async () => {
        const resp = await postSignup(body)
        if (resp.error) {
          setIsError(true)
          console.error(resp.error)
          return
        }
        console.log('response', resp)
        setCookieClientRegisterSuccess()
        router.push('/signup/success')
      })
      reset()
    } catch (error) {
      console.error(error)
    }
  }


  return (
    <div className='w-full h-full md:px-0 flex flex-col gap-4 items-center justify-center py-8 lg:py-0'>
      <h2 className='heading-2 text-white'>Crear cuenta</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='flex flex-col items-center justify-center  w-full'>
        <div className='grid lg:grid-cols-2 justify-center items-center gap-4 lg:gap-8 w-full'>
          {/* Nombre */}
          <div className='w-full'>
            <Controller
              name='firstname'
              control={control}
              render={({ field }) => (
                <InputForm
                  {...field}
                  id='firstname'
                  type='text'
                  placeholder='Nombre*'
                  error={errors.firstname?.message}
                />
              )}
            />
          </div>
          {/* Apellido */}
          <div className='w-full'>
            <Controller
              name='lastname'
              control={control}
              render={({ field }) => (
                <InputForm
                  {...field}
                  id='lastname'
                  type='text'
                  placeholder='Apellido*'
                  error={errors.lastname?.message}
                />
              )}
            />
          </div>
          {/* DNI */}
          <div className='w-full'>
            <Controller
              name='dni'
              control={control}
              render={({ field }) => (
                <InputForm
                  {...field}
                  id='dni'
                  type='text'
                  placeholder='DNI*'
                  error={errors.dni?.message}
                />
              )}
            />
          </div>
          {/* Correo */}
          <div className='w-full'>
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
          </div>
        </div>
        {/* Message contraseña */}
        <div className='w-full my-5 text-center'>
          <p className='text-sm xl:text-[15px] font-normal text-tertiary text-white'>
            Usa entre 6 y 20 carácteres (debe contener al menos al menos 1
            carácter especial, una mayúscula y un número
          </p>
        </div>
        <div className='grid lg:grid-cols-2 justify-center items-center gap-4 lg:gap-8 w-full'>
          {/* Contraseña */}
          <div className='w-full'>
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
          </div>
          {/* Confirmar contraseña */}
          <div className='w-full'>
            <Controller
              name='confirmPassword'
              control={control}
              render={({ field }) => (
                <InputForm
                  {...field}
                  id='confirmPassword'
                  type='password'
                  placeholder='Confirmar contraseña*'
                  error={errors.confirmPassword?.message}
                />
              )}
            />
          </div>
          {/* Telefono */}
          <div className='w-full'>
            <Controller
              name='phone'
              control={control}
              render={({ field }) => (
                <InputForm
                  {...field}
                  id='phone'
                  type='text'
                  placeholder='Teléfono*'
                  error={errors.phone?.message}
                />
              )}
            />
          </div>
          {/* Button */}
          <div className='w-full'>
            <Button
              title={isError ? 'Usuario existente' : 'Crear cuenta'}
              state={isCompleted ? isError ? 'error' : 'default' : 'disabled'}
              type='submit'
              loading={isPending}
              disabled={!isCompleted}
            />
          </div>
        </div>
      </form>
    </div>
  )
}
