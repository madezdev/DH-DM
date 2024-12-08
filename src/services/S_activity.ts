import { ActivityList } from '@/interfaces/I_Activity'
import { axiosClient } from './common/axios.client'

export const getActivity = async ( accountId: number ) => {
  const response = await axiosClient.get( `/accounts/${ accountId }/activity` )
  return response.data as ActivityList
}