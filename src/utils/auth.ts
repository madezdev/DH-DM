import bcrypt from 'bcryptjs'


// Función para hashear la contraseña
export const hashPassword = async ( password: string ) => {
  const saltRounds = 10
  const salt = await bcrypt.genSalt( saltRounds )
  const hashedPassword = await bcrypt.hash( password, salt )
  return hashedPassword
}

// Función para verificar la contraseña
export const verifyPassword = async ( password: string, hashedPassword: string ) => {
  const isMatch = await bcrypt.compare( password, hashedPassword )
  return isMatch
}