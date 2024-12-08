import React from 'react'
import { ContainerCard } from '../common'
import { ButtonCopy } from '../shared'
import { AccountData } from '@/interfaces/I_Account'

interface Props {
  data: AccountData
}

export const BankData = ({ data }: Props) => {
  return (
    <ContainerCard className='bg-secondary mb-4'>
      <p className='text-white text-sm'>
        Copia tu cvu o alias para ingresar o transferir dinero desde otra cuenta
      </p>
      <div className='flex flex-col gap-y-2 mt-4'>
        <ButtonCopy
          title='CVU'
          value={data.cvu}
        />
        <ButtonCopy
          title='Alias'
          value={data.alias}
        />
      </div>
    </ContainerCard>
  )
}
