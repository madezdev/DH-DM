/* eslint-disable @typescript-eslint/no-explicit-any */
import { ActivityItem } from '@/interfaces/I_Activity'
import { axiosClient } from './common/axios.client'

export const getActivity = async ( accountId: number ): Promise<ActivityItem[]> => {
  try {
    const response = await axiosClient.get( `/accounts/${ accountId }/activity` )
    return response.data
  } catch ( error: any) {
    return error.response.data
  }
}