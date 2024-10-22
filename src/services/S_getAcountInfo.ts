import { httpGet } from './common/S_httpPost'
import { Account } from '@/interfaces/I_Account'

export async function getAcountInfo( token: string, options = {} ): Promise<Account> {
  return httpGet( '/account', token, {
    headers: {
      "Content-Type": "application/json",
    },
    ...options,
  } )
    .then( ( data ) => data as Account )
    .catch( ( error ) => {
      console.error( error )
      throw error
    } )
}