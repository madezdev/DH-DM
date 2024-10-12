import React from 'react'
import { LoginForm } from '@/components'
import { cookies } from 'next/headers'

export default function LoginPage() {
  const signupSuccess = cookies().get('signupSuccess')
  return (
    <>
      <LoginForm isSignupSuccess={signupSuccess} />
    </>
  )
}
