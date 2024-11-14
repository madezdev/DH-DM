import React from 'react'
import { cookies } from 'next/headers'
import { LoginForm } from '@/components'

export default async function LoginPage() {
  const cookieStore = await cookies()
  const signupSuccess = cookieStore.get('signupSuccess')
  return (
    <>
      <LoginForm isSignupSuccess={signupSuccess} />
    </>
  )
}
