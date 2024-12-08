'use client'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import useLocalStorage from '@/hooks/useLocalStorage'
import { LoginFormProps, UserLogin } from '@/interfaces/I_UserData'
import { setCookieClient } from '@/utils/cookieClient'
import { StepMail } from './stepMail'
import { StepPass } from './stepPass'
import { postLogin } from '@/services/S_auth'

export const LoginForm = ({ isSignupSuccess }: LoginFormProps) => {
  const [userData, setUserData] = useState<UserLogin>({ email: '' })
  const [error, setError] = useState<string | null>(null)
  const [step, setStep] = useState(1)
  const { setValue } = useLocalStorage('acc_token')
  const router = useRouter()

  // Manejador para el envío del primer paso (email)
  const handleEmailSubmit = (data: { email: string }) => {
    setUserData((prevData) => ({ ...prevData, email: data.email }))
    setStep(2)
  }

  // Manejador para el envío del segundo paso (contraseña)
  const handlePasswordSubmit = async (data: { password: string }) => {
    const updatedData = { ...userData, password: data.password }

    try {
      const resp = await postLogin(updatedData)
      if (resp.token && !resp.error) {
        setCookieClient({ name: 'authToken', value: resp.token, hours: 24 })
        setValue(resp.token)
        router.push('/home')
      }
    } catch (error) {
      setError('Error al iniciar sesión intenta de nuevo')
      console.error(error)
    }
  }

  // Manejador para regresar al paso 1
  const handleBack = () => {
    setStep(1)
    setUserData({ email: '' })
    setError(null)
  }

  // Si el usuario regresa al paso 1, por medio del browser, reseteamos el estado
  if (step === 1 && userData.password) {
    setUserData({ email: '' })
  }

  return (
    <>
      {step === 1 && (
        <StepMail
          onSubmit={handleEmailSubmit}
          isSignupSuccess={isSignupSuccess}
        />
      )}
      {step === 2 && <StepPass onSubmit={handlePasswordSubmit} />}
      {error && (
        <div
          className='text-error flex items-center mt-4 gap-2 cursor-pointer w-full'
          onClick={handleBack}>
          {/* <BackIcon className="w-6 h-6 " /> */}
          <p className='text-sm italic font-normal'>{error}</p>
        </div>
      )}
    </>
  )
}
