import axios from 'axios'
import { getTokenFromCookie } from '@/utils/getTokenCookie'

export const axiosClient = axios.create( {
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
} )

// Interceptor para agregar el token a cada solicitud
axiosClient.interceptors.request.use(
  async ( config ) => {
    const token = await getTokenFromCookie()
    if ( token ) {
      config.headers[ 'Authorization' ] = token
    }
    return config
  },
  ( error ) => {
    return Promise.reject( error )
  }
)

axiosClient.interceptors.response.use(
  ( response ) => {
    return response
  },
  ( error ) => {
    console.log( error.code )
    return Promise.reject( error )
  }
)