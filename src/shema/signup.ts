import zod from 'zod'

export const signupSchema = zod.object( {
  firstname: zod.string().min( 3, { message: 'El nombre debe tener al menos 3 caracteres' } ).regex( /^[a-zA-Z\s]*$/, { message: 'El nombre solo puede contener letras' } ),

  lastname: zod.string().min( 3, { message: 'El apellido debe tener al menos 3 caracteres' } ).regex( /^[a-zA-Z\s]*$/, { message: 'El apellido solo puede contener letras' } ),

  dni: zod.string().min( 8, { message: 'El DNI debe tener al menos 8 caracteres' } ).regex( /^[0-9]*$/, { message: 'El DNI solo puede contener números' } ),

  email: zod.string().email().regex( /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, { message: 'El correo no es válido' } ),

  password: zod.string().min( 8, 'La contraseña debe tener al menos 8 caracteres' ).regex( /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,}$/, { message: 'Contraseña inválida' } ),

  confirmPassword: zod.string(),
} ).superRefine( ( data, ctx ) => {
  if ( data.password !== data.confirmPassword ) {
    ctx.addIssue( {
      code: 'custom',
      path: [ 'confirmPassword' ],
      message: 'Las contraseñas no coinciden',
    } )
  }
} )