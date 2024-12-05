import { z } from 'zod'

export const cardSchema = z.object( {
  number_id: z.string().min( 16, 'La tarjeta debe tener al menos 16 caracteres' ).regex( /^[0-9]{16}$/, { message: 'Tarjeta inválida' } ),
  cod: z.string().min( 3, 'El CVV debe tener al menos 3 caracteres' ).regex( /^[0-9]{3}$/, { message: 'CVV inválido' } ),
  expiration_date: z.string().min( 4, 'La fecha de expiración debe tener al menos 4 caracteres' ).regex(/^(0[1-9]|1[0-2])[0-9]{2}$/, { message: 'Fecha de expiración inválida' } ),
  first_last_name: z.string().min( 1, 'El nombre debe tener al menos 1 caracter' ),
} )