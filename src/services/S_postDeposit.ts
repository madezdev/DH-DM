import { axiosClient } from './common/axios.client'

interface Deposit {
  origin: string;
  destination: string;
  dated: string;
  amount: number;
}

export const postDeposit = async ({id, body}: {id: number, body: Deposit}) => {
  const response = await axiosClient.post(`/accounts/${id}/deposits`, body)
  console.log('response', response);
  
  return response.data
}