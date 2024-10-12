import { z } from 'zod'
export const emailSchema = z.object( {
  email: z.string().email().regex( /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, { message: 'El correo no es válido' } )
} )

export const passwordSchema = z.object( {
  password: z.string().min( 8, 'La contraseña debe tener al menos 8 caracteres' ).regex( /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,}$/, { message: 'Contraseña inválida' } ),
} )