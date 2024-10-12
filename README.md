This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

# Digital Money

- **Proyecto integrador**
- Creación de una billetera virtual (PSP)

# Tecnologías Utilizadas

- **Next.js**: Framework de React para aplicaciones web.
- **React**: Librería de JavaScript para construir interfaces de usuario.
- **Tailwind CSS**: Framework de CSS para diseñar interfaces de usuario modernas y responsivas.
- **React Hook Form**: Librería para manejo de formularios en React.
- **clsx**: Utilidad para construir clases condicionales.
- **html-react-parser**: Librería para parsear y convertir HTML en componentes React.

# Funcionalidades Principales

## Sprint 1: Inicio, Registro y Acceso

### Inicio
- Compatibilidad con dispositivos **desktop**, **tablet** y **mobile**.
- Visualización de las funcionalidades principales: **transferencias** y **pago de servicios**.
- Acceso directo a "Iniciar sesión" y "Registro".

### Registro
- Validación de los datos ingresados.
- Registro exitoso y redirección a la página de **Login** tras completar correctamente.
- Mensajes de error cuando los datos son incorrectos.

### Acceso
- Validación de los campos requeridos (email y contraseña).
- Proceso de inicio de sesión en dos pasos/pantallas.
- Redirección a `/home` tras un login exitoso.
- Cierre de sesión elimina el token de local storage y redirige a la página promocional.

## Épica: Testing & Calidad

### Testing Manual
- Plan de pruebas con casos de prueba para **suites de smoke** y **regresión**.
- Clasificación y mantenimiento de casos de prueba manuales.
- Ejecución de las suites de pruebas.

## Sprint 2: Dashboard, Mi Perfil y Gestión de Medios de Pago

### Dashboard
- Visualización del saldo disponible con acceso rápido a "Ingresar dinero" y "Ver mi CVU".
- Resumen de los últimos movimientos financieros con un buscador.

### Mi Perfil
- Edición de datos personales y alias.
- Copiado rápido de **CVU** y **alias**.
- Botón de "Gestionar medios de pago" que redirige a la sección correspondiente.

### Gestión de Medios de Pago
- Posibilidad de agregar, ver y eliminar tarjetas.
- Validación del tipo de tarjeta (Visa, Mastercard, AMEX).

## Épica: Testing & Calidad

### Testing Automatizado
- Automatización de pruebas utilizando **Java** y **Selenium**.
- Subida del framework de automatización a **GitLab**.

## Sprint 3: Ingreso de Dinero y Mi Actividad

### Ingreso de Dinero
- Selección de medios de pago adheridos.
- Visualización del **CVU** y alias de cuenta, con opción para copiar al portapapeles.

### Mi Actividad
- Historial completo de transacciones, con filtrado por período y tipo de operación.
- Funcionalidad de búsqueda por palabras clave y detalle de transacción.

## Sprint 4: Pago de Servicios

### Servicios Disponibles
- Lista completa de servicios disponibles para pago.
- Buscador por título de servicio.

### Pago de Servicios
- Verificación de la validez del número de cuenta.
- Selección de medio de pago y visualización del resumen de la transacción.

## Épica: Testing & Calidad

### Testing Exploratorio
- Ejecución de tests exploratorios documentados.

# Infraestructura

- Diseño de la infraestructura necesaria para el despliegue.
- Generación de archivo **Docker Compose** e imagen Docker para despliegue en **AWS**.

# Opcionales

### Recuperación de Contraseña
- Envío de email con link para recuperación de contraseña.
- Pantalla para ingreso y confirmación de nueva contraseña.

### Validación de Correo Electrónico
- Solicitud de código de 6 dígitos al intentar login por primera vez.

### Filtrado de Actividades por Montos Aproximados
- Filtros por rangos de montos: `$0 - $1000`, `$1000 - $5000`, `$5000 - $20000`, `$20000 - $100000`, `Más de $100000`.

### Descargar Comprobante de Pago
- Opción de descargar el comprobante de pago en formato **PDF**.
