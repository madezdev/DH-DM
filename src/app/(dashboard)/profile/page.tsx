import { BankData, Button, Container } from '@/components'
import { ProfileData } from '@/components/profile'
import { Profile } from '@/interfaces/I_Profile'
import { getAccount } from '@/services/S_getAcountInfo'
import { getUser } from '@/services/S_user'
import Link from 'next/link'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

export default async function ProfilePage() {
  const accountInfo = await getAccount()
  const profileInfo: Profile = {
    id: accountInfo.user_id,
    ...(await getUser(accountInfo.user_id)),
  }

  return (
    <Container title='Perfil'>
      <div className='flex flex-col justify-between gap-[20px] w-full'>
        <ProfileData userInfo={profileInfo} />
        <Link href='/profile/manage-payment'>
          <Button
            title='Gestionar los medios de pago'
            state='default'
            className='w-full py-5'
            icon={<FaArrowRight />}
          />
        </Link>
        <BankData accountInfo={accountInfo} />
      </div>
    </Container>
  )
}
