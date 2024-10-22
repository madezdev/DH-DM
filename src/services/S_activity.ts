import { ActivityList } from '@/interfaces/I_Activity'
import { httpGet } from './common/S_httpPost'

export async function getActivity( id: number, token: string, options = {} ): Promise<ActivityList> {
  return httpGet( `/accounts/${ id }/activity`, token, {
    headers: {
      "Content-Type": "application/json",
    },
    ...options,
  } )
    .then( ( data ) => data as ActivityList )
    .catch( ( error ) => {
      console.error( error )
      throw error
    } )
}