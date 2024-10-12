import { IpostSignupBody, IpostSignupResponse } from '@/interfaces/I_signup'
import { httpPost } from './common/S_httpPost'

export async function postSignup( body: IpostSignupBody, options = {} ): Promise<IpostSignupResponse> {
  
  return httpPost( "/users", body, {
    headers: {
      "Content-Type": "application/json",
    },
    ...options,
  } )
    .then( ( data ) => {
      return data as IpostSignupResponse
    } )
    .catch( ( error ) => {
      console.error( error )
      throw error
    } )

}