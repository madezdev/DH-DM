export interface Isignup {
  dni: string,
  email: string,
  firstname: string,
  lastname: string,
  password: string,
  confirmPassword: string,
  phone: string,
  error?: string
}

export interface IpostSignupResponse {
  account_id: number
  email: string
  user_id: number
  error?: string
}

export interface IpostSignupBody {
  dni: number,
  email: string,
  firstname: string,
  lastname: string,
  password: string,
  confirmPassword: string,
  phone: string,
  error?: string
}