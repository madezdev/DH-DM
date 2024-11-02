import React from 'react'
import { ContainerCard } from '../common'
import { ButtonCopy } from './buttonCopy'
import { Account } from '@/interfaces/I_Account'

interface Props {
  accountInfo: Account
}

export const BankData = ({ accountInfo }: Props) => {
  return (
    <ContainerCard className='bg-secondary mb-4'>
      <p className='text-white text-sm'>
        Copia tu cvu o alias para ingresar o transferir dinero desde otra cuenta
      </p>
      <div className='flex flex-col gap-y-2 mt-4'>
        <ButtonCopy
          title='CVU'
          value={accountInfo.cvu}
        />
        <ButtonCopy
          title='Alias'
          value={accountInfo.alias}
        />
      </div>
    </ContainerCard>
  )
}
