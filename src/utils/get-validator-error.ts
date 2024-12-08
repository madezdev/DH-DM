import { TypeWithKey } from './Type-With-Key'

export const getValidationError = ( errorCode: keyof TypeWithKey<string> ) => {
  const codeMatcher: TypeWithKey<string> = {
    ERR_NETWORK: 'Error de red',
    ERR_TIMEOUT: 'Tiempo de espera agotado',
    ERR_CANCEL: 'Petición cancelada',
    ERR_UNKNOWN: 'Error desconocido',
    ERR_400: 'Error 400 - Petición incorrecta',
    ERR_401: 'Error 401 - No autorizado',
    ERR_403: 'Error 403 - Prohibido',
    ERR_404: 'Error 404 - No encontrado',
    ERR_500: 'Error 500 - Error interno del servidor',
    ERR_502: 'Error 502 - Gateway incorrecto',
    ERR_503: 'Error 503 - Servicio no disponible',
  }

  return codeMatcher[ errorCode ]
}