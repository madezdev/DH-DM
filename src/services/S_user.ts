import { UserData } from '@/interfaces/I_UserData'
import { httpGetRevalidate, httpPatch } from './common/S_httpPost'

export async function getUserInfo( id: number, token: string, revalidateTag = "", options = {} ): Promise<UserData> {
  return httpGetRevalidate( `/users/${ id }`, token, revalidateTag, {
    headers: {
      "Content-Type": "application/json",
    },
    ...options,
  } )
    .then( ( data ) => data as UserData )
    .catch( ( error ) => {
      console.error( error )
      throw error
    } )
}


export async function patchUserInfo( id: number, body: UserData, options = {} ): Promise<UserData> {
  return httpPatch( `/users/${ id }`, body, {
    headers: {
      "Content-Type": "application/json",
    },
    ...options,
  } )
    .then( ( data ) => data as UserData )
    .catch( ( error ) => {
      console.error( error )
      throw error
    } )
}