import axios from 'axios'

interface PostLoginBody {
  email: string
  password: string
}

interface PostLoginResponse {
  token: string
  error?: string
}

export const postLogin = async ( body: PostLoginBody ) => {
  const baseURL = process.env.NEXT_PUBLIC_API_URL
  const response = await axios.post( `${baseURL}/login`, body, )
  return response.data as PostLoginResponse
}
