import { UserData } from '@/interfaces/I_UserData'
import { axiosClient } from './common/axios.client'

export const getUser = async ( userId: number ) => {
  const response = await axiosClient.get( `/users/${ userId }` )
  return response.data as UserData
}

export const patchUser = async ( userId: number, body: UserData ) => {
  const response = await axiosClient.patch( `/users/${ userId }`, body )
  return response.data as UserData
}