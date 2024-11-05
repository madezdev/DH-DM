import { Card } from '@/interfaces/I_Card'
import { httpDelete, httpGet, httpPost } from './common/S_httpPost'

export async function getCards( account_id: number, token: string, options = {} ): Promise<Card[]> {
  return httpGet( `/accounts/${ account_id }/cards`, token, {
    headers: {
      "Content-Type": "application/json",
    },
    ...options,
  } )
    .then( ( data ) => data as Card[] )
    .catch( ( error ) => {
      console.error( error )
      throw error
    } )
}

export async function postCards( account_id: number, body: Card, options = {} ): Promise<Card> {
  return httpPost( `/accounts/${ account_id }/cards`, body, {
    headers: {
      "Content-Type": "application/json",
    },
    ...options,
  } )
    .then( ( data ) => data as Card )
    .catch( ( error ) => {
      console.error( error )
      throw error
    } )
}


export async function deleteCard( account_id: number, cardId: number, options = {} ): Promise<Card> {
  return httpDelete( `/accounts/${ account_id }/cards/${ cardId }`, {
    headers: {
      "Content-Type": "application/json",
    },
    ...options,
  } )
    .then( ( data ) => data as Card )
    .catch( ( error ) => {
      console.error( error )
      throw error
    } )
}

export async function getCardById( account_id: number = 0, token: string, cardId: string, options = {} ): Promise<Card> {
  return httpGet( `/accounts/${ account_id }/cards/${ cardId }`, token, {
    headers: {
      "Content-Type": "application/json",
    },
    ...options,
  } )
    .then( ( data ) => data as Card )
    .catch( ( error ) => {
      console.error( error )
      throw error
    } )
}