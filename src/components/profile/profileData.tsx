'use client'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import clsx from 'clsx'
import { useForm } from 'react-hook-form'
import toast, { Toaster } from 'react-hot-toast'
import { ContainerCard } from '../common'
import { Profile } from '@/interfaces/I_Profile'
import { MdEdit } from 'react-icons/md'
import { patchUser } from '@/services/S_user'

interface Props {
  userInfo: Profile
}

export const ProfileData = ({ userInfo }: Props) => {
  const router = useRouter()
  const [isEditable, setIsEditable] = useState({
    name: '',
    dni: '',
    phone: '',
    password: '',
  })

  const { handleSubmit, register, getValues } = useForm<Profile>({
    mode: 'onBlur',
  })

  const onSubmit = async (data: Profile) => {
    const fullName = getValues('firstname') || ''
    const [firstname, lastname] = fullName.split(' ')

    const body = {
      firstname: firstname,
      lastname: lastname,
      dni: Number(data.dni),
      email: data.email,
      phone: data.phone,
      password: data.password,
    }

    await patchUser(userInfo.id, body)
    await fetch('/api/revalidate')

    router.refresh()
    toast.success('Datos actualizados correctamente')

    setIsEditable({
      name: '',
      dni: '',
      phone: '',
      password: '',
    })
  }

  const handleEditClick = (field: keyof typeof isEditable) => {
    setIsEditable((prevState) => ({
      ...prevState,
      [field]: !prevState[field],
    }))
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSubmit(onSubmit)()
    }
  }

  return (
    <ContainerCard title='Tus datos'>
      <Toaster
        position='bottom-right'
        reverseOrder={false}
        toastOptions={{ duration: 3000 }}
      />
      <div className='my-4 flex flex-col'>
        <p className='text-1'>Email</p>
        <span className='text-black/50 text-1'> {userInfo?.email} </span>
        <div className='h-[1px] w-full bg-black/50 rounded mt-[8px] ' />
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='flex flex-col gap-2'>
        <div
          className={clsx('flex flex-col ', {
            'border-primary border-b': isEditable.name,
            'border-black/50 border-b': !isEditable.name,
          })}>
          <p className='text-1'>Nombre y Apellido</p>
          <div className='flex justify-between items-center '>
            <input
              {...register('firstname')}
              type='text'
              name='firstname'
              id='firstname'
              defaultValue={`${userInfo?.firstname} ${userInfo?.lastname}`}
              placeholder='Ingresa tu nombre y apellido'
              disabled={!isEditable.name}
              autoFocus
              onKeyDown={handleKeyDown}
              className={clsx(
                'text-1 bg-transparent w-full focus:outline-none focus:border-slate-500',
                {
                  'text-bgSecundary': isEditable.name,
                  'text-black/50': !isEditable.name,
                }
              )}
            />
            <button
              type='button'
              className='p-2'
              onClick={() => {
                handleEditClick('name')
              }}>
              <MdEdit
                className={clsx({
                  'text-primary': isEditable.name,
                  'text-black/50': !isEditable.name,
                })}
              />
            </button>
          </div>
        </div>
        <div
          className={clsx('flex flex-col ', {
            'border-primary border-b': isEditable.dni,
            'border-black/50 border-b': !isEditable.dni,
          })}>
          <p className='text-1'>CUIT</p>
          <div className='flex justify-between items-center'>
            <input
              {...register('dni')}
              type='number'
              name='dni'
              id='dni'
              defaultValue={userInfo?.dni}
              placeholder='Ingresa tu CUIT'
              disabled={!isEditable.dni}
              onKeyDown={handleKeyDown}
              className={clsx(
                'text-1 *:bg-transparent w-full focus:outline-none focus:border-slate-500',
                {
                  'text-bgSecundary': isEditable.dni,
                  'text-black/50': !isEditable.dni,
                }
              )}
            />
            <button
              type='button'
              className='p-2'
              onClick={() => handleEditClick('dni')}>
              <MdEdit className='text-black/50' />
            </button>
          </div>
        </div>
        <div
          className={clsx('flex flex-col', {
            'border-primary border-b': isEditable.phone,
            'border-black/50 border-b': !isEditable.phone,
          })}>
          <p className='text-1'>Teléfono</p>
          <div className='flex justify-between items-center'>
            <input
              {...register('phone')}
              type='number'
              name='phone'
              id='phone'
              defaultValue={userInfo?.phone}
              placeholder='Ingresa tu teléfono'
              disabled={!isEditable.phone}
              onKeyDown={handleKeyDown}
              className={clsx(
                'text-1 bg-transparent w-full focus:outline-none focus:border-slate-500',
                {
                  'text-bgSecundary': isEditable.phone,
                  'text-black/50': !isEditable.phone,
                }
              )}
            />
            <button
              type='button'
              className='p-2'
              onClick={() => {
                handleEditClick('phone')
              }}>
              <MdEdit className='text-black/50' />
            </button>
          </div>
        </div>
        <div
          className={clsx('flex flex-col', {
            'border-primary border-b': isEditable.password,
            'border-black/50 border-b': !isEditable.password,
          })}>
          <p className='text-1'>Contraseña</p>
          <div className='flex justify-between items-center'>
            <input
              {...register('password')}
              type='password'
              name='password'
              id='password'
              defaultValue='********'
              placeholder='Ingresa tu contraseña'
              disabled={!isEditable.password}
              onKeyDown={handleKeyDown}
              className={clsx(
                'text-1 bg-transparent w-full focus:outline-none focus:border-slate-500',
                {
                  'text-bgSecundary': isEditable.password,
                  'text-black/50': !isEditable.password,
                }
              )}
            />
            <button
              type='button'
              className='p-2'
              onClick={() => {
                handleEditClick('password')
              }}>
              <MdEdit className='text-black/50' />
            </button>
          </div>
        </div>
      </form>
    </ContainerCard>
  )
}
