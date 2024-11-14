import { axiosClient } from './common/axios.client'
import { Card, PostCard } from '@/interfaces/I_Card'

export const getCards = async ( account_id: number ) => {
  const response = await axiosClient( `/accounts/${ account_id }/cards` )
  return response.data as Card[]
}

export const postCards = async ( account_id: number, body: PostCard ) => {
  const response = await axiosClient.post( `/accounts/${ account_id }/cards`, body )
  return response.data
}

export const deleteCard = async ( account_id: number, cardId: number ) => {
  const response = await axiosClient.delete( `/accounts/${ account_id }/cards/${ cardId }` )
  return response.data
}

export const getCardById = async ( account_id: number, cardId: number ) => {
  const response = await axiosClient.get( `/accounts/${ account_id }/cards/${ cardId }` )
  return response.data
}
