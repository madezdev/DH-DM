import { Account } from '@/interfaces/I_Account'
import { axiosClient } from './common/axios.client'

export const getAccount = async () => {
  const response = await axiosClient.get( '/account' )
  return response.data as Account
}