export interface UserLogin {
  email: string
  password?: string
}

export interface Cookie {
  name: string
  value: string
}

export interface LoginFormProps {
  isSignupSuccess: Cookie | undefined
}

export interface UserData {
  dni: number
  firstname: string
  lastname: string
  email: string
  password: string
  phone: string
}