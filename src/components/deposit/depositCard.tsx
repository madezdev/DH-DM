// DepositCard Component
'use client'
import React, { useState } from 'react'
import { Card } from '@/interfaces/I_Card'
import { FormProvider, useForm } from 'react-hook-form'
import { SelectCard } from './selectCard'
import { AddAmount } from './addAmount'
import { CheckDeposit } from './checkDeposit'
import { Account } from '@/interfaces/I_Account'
import { SuccessOperation } from './successOperation'
import { postDeposit } from '@/services/S_postDeposit'

interface Props {
  cards: Card[]
  accountInfo: Account
}

interface DepositData {
  card_id: string
  amount: number
}

export const DepositCard = ({ cards, accountInfo }: Props) => {
  const [step, setStep] = useState(0)

  const methods = useForm<DepositData>({
    defaultValues: {
      card_id: '',
      amount: 0,
    },
  })

  const onSubmit = async (data: DepositData) => {
    
    const id = accountInfo.id
    const { amount } = data
    const date = new Date()
    console.log('date', date);
    const formattedDate = date.toISOString()
    console.log('formattedDate', formattedDate);
    
    
    const body = {
      origin: 'origen',
      destination:'destino',
      dated: new Date().toISOString(),
      amount: Number(amount),
    }
    const response = await postDeposit({ id, body })

    if (response) {
      handleNextStep()
    }
    
  }

  const handleNextStep = () => {
    setStep((prevStep) => prevStep + 1)
  }

  const handleBackStep = () => {
    setStep((prevStep) => prevStep - 1)
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        {step === 0 && (
          <SelectCard
            cards={cards}
            handleNextStep={handleNextStep}
          />
        )}
        {step === 1 && (
          <AddAmount
            handleNextStep={handleNextStep}
            handleBackStep={handleBackStep}
          />
        )}
        {step === 2 && (
          <CheckDeposit
            handleBackStep={handleBackStep}
            cvu={accountInfo.cvu}
          />
        )}
        {step === 3 && (
          <SuccessOperation
            handleBackStep={handleBackStep}
            cvu={accountInfo.cvu}
          />
        )}
      </form>
    </FormProvider>
  )
}
