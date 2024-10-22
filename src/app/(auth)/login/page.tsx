import React from 'react'
import { cookies } from 'next/headers'
import { LoginForm } from '@/components'

export default function LoginPage() {
  const signupSuccess = cookies().get('signupSuccess')
  return (
    <>
      <LoginForm isSignupSuccess={signupSuccess} />
    </>
  )
}
