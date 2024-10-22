'use server'
import { cookies } from 'next/headers'

export async function getTokenFromCookie() {
  const token = cookies().get( 'authToken' )?.value || ''
  return token
}
