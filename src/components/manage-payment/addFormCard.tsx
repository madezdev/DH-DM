'use client'
import React, { useEffect, useState, useTransition } from 'react'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { ContainerCard } from '../common'
import { MaskedCard } from './maskedCard'
import { Button, InputForm } from '../shared'
import { PostCard } from '@/interfaces/I_Card'
import { postCards } from '@/services/S_card'
import { cardSchema } from '@/shema/card.schema'
import { zodResolver } from '@hookform/resolvers/zod'

interface Props {
  account_id: number
}

export const AddFormCard = ({ account_id }: Props) => {
  const router = useRouter()
  const [isPending, startTransition] = useTransition()
  const [isDataCardComplete, setIsDataCardComplete] = useState(false)
  const [dataCard, setDataCard] = useState<PostCard>({
    number_id: 0,
    first_last_name: '',
    cod: 0,
    expiration_date: '',
  })

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<PostCard>({
    resolver: zodResolver(cardSchema),
  })
  const formValues = watch()

  const onSubmit = (data: PostCard) => {
    const formatDate = (date: string) => {
      const month = date.slice(0, 2)
      const year = '20' + date.slice(2, 4)
      return `${month}/${year}`
    }
    const body = {
      cod: Number(data.cod),
      expiration_date: formatDate(data.expiration_date),
      first_last_name: data.first_last_name,
      number_id: Number(data.number_id),
    }
    startTransition(async () => {
      await postCards(account_id, body)
    })
    setTimeout(() => {
      reset()
      router.push('/profile/manage-payment')
    }, 2000)
  }

  useEffect(() => {
    if (
      formValues.number_id !== dataCard.number_id ||
      formValues.first_last_name !== dataCard.first_last_name ||
      formValues.expiration_date !== dataCard.expiration_date ||
      formValues.cod !== dataCard.cod
    ) {
      setDataCard((prevData) => ({
        ...prevData,
        ...formValues,
      }))
    }
    setIsDataCardComplete(Object.values(formValues).every((value) => value))
  }, [formValues, dataCard])

  return (
    <ContainerCard className='flex flex-col items-center justify-center w-full '>
      <div className='py-4 px-[8px] w-full lg:flex lg:flex-col lg:items-center lg:justify-center'>
        <MaskedCard dataCard={dataCard} />
        <div className='w-full mt-[30px] lg:flex lg:flex-col lg:items-center lg:justify-center'>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='w-full flex flex-col gap-5'>
              <div className='flex flex-col gap-4 xl:flex-row xl:gap-16'>
                <InputForm
                  type='number'
                  id='number_id'
                  placeholder='Número de tarjeta*'
                  noBorder={true}
                  className='px-5  bg-white rounded-[10px] shadow-md border border-[#d2ffec] justify-center items-center gap-2.5 inline-flex '
                  onInput={(e) => {
                    const target = e.target as HTMLInputElement
                    if (target.value.length > 16) {
                      target.value = target.value.slice(0, 16)
                    }
                  }}
                  {...register('number_id', {
                    required: true,
                    maxLength: 16,
                  })}
                />
                {errors.number_id && (
                  <span className='text-red-500 text-[12px]'>
                    {errors.number_id.message}
                  </span>
                )}

                <InputForm
                  type='text'
                  placeholder='Nombre y apellido*'
                  id='first_last_name'
                  noBorder={true}
                  className='px-5  bg-white rounded-[10px] shadow-md border border-[#d2ffec] justify-center items-center gap-2.5 inline-flex '
                  {...register('first_last_name', { required: true })}
                />
                {errors.first_last_name && (
                  <span className='text-red-500 text-[12px]'>
                    {errors.first_last_name.message}
                  </span>
                )}
              </div>

               <div className='flex flex-col gap-[14px] lg:flex-row xl:gap-16'>
                <InputForm
                  type='text'
                  placeholder='Fecha de vencimiento*'
                  id='expiration_date'
                  noBorder={true}
                  className='px-5  bg-white rounded-[10px] shadow-md border border-[#d2ffec] justify-center items-center gap-2.5 inline-flex '
                  {...register('expiration_date', { required: true })}
                />
                {errors.expiration_date && (
                  <span className='text-red-500 text-[12px]'>
                    {errors.expiration_date.message}
                  </span>
                )}

                <InputForm
                  type='number'
                  placeholder='Código de seguridad*'
                  id='cod'
                  noBorder={true}
                  className='px-5 bg-white rounded-[10px] shadow-md border border-[#d2ffec] justify-center items-center gap-2.5 inline-flex '
                  {...register('cod', { required: true })}
                />
                {errors.cod && (
                  <span className='text-red-500 text-[12px]'>
                    {errors.cod.message}
                  </span>
                )}
                
                </div> 

              <div className='mt-[10px] flex lg:justify-center xl:justify-end'>
                <Button
                  type='submit'
                  state={isDataCardComplete ? 'default' : 'disabled'}
                  title='Continuar'
                  loading={isPending}
                  className='py-2 max-w-[360px]'
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </ContainerCard>
  )
}
