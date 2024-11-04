import { BankData, Button, Container } from '@/components'
import { ProfileData } from '@/components/profile'
import { Profile } from '@/interfaces/I_Profile'
import { getAcountInfo } from '@/services/S_getAcountInfo'
import { getUserInfo } from '@/services/S_user'
import { getTokenFromCookie } from '@/utils/getTokenCookie'
import Link from 'next/link'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

export default async function ProfilePage() {
  const token = await getTokenFromCookie()
  const accountInfo = await getAcountInfo(token)
  const profileInfo: Profile = {
    id: accountInfo.user_id,
    ...(await getUserInfo(accountInfo.user_id, token, 'user-info')),
  }
 
  return (
    <Container title='Perfil'>
      <div className='flex flex-col justify-between gap-[20px] w-full'>
        <ProfileData userInfo={ profileInfo } />
        <Link href='/profile/manage-payment'>
          <Button
            title='Gestionar los medios de pago'
            state='default'
            className='w-full py-5'
            icon={<FaArrowRight />}
          />
        </Link>
        <BankData accountInfo={ accountInfo } />
      </div>
    </Container>
  )
}
