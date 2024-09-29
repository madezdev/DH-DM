/* eslint-disable @typescript-eslint/no-explicit-any */
import { forwardRef } from 'react'
import clsx from 'clsx'
import { FieldError, FieldErrorsImpl, Merge } from 'react-hook-form'

/**
 * Componente TextInput para entradas de formulario.
 * @type {React.FC<TextInputProps & React.InputHTMLAttributes<HTMLInputElement>>}
 */

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  type?: 'text' | 'email' | 'password' | 'number' | 'tel'
  hasError?: boolean
  error?:
    | string
    | FieldError
    | Merge<FieldError, FieldErrorsImpl<any>>
    | undefined
  className?: string
  noBorder?: boolean
}

export const InputForm = forwardRef(function InputForm(
  { type = 'text', hasError, error, className, noBorder, ...props }: Props,
  ref: React.Ref<HTMLInputElement>
) {
  hasError = hasError || Boolean(error)
  return (
    <div>
      <input
        type={type}
        ref={ref}
        {...props}
        className={clsx(
          'heading-3 w-full rounded-lg text-black transition outline-none',
          className,
          {
            'border-primary  focus:outline-primary': !hasError && !noBorder,
            'border-error  focus:outline-error': hasError,
            'border-0 focus:border-0': noBorder,
          }
        )}
        title={error as string}
      />
      {error && (
        <p
          className='text-1 text-left italic text-error font-normal mt-1 py-1 pl-3 left-2 pr-3 truncate peer-focus:opacity-0 pointer-events-none transition w-full '
          style={{
            maxWidth: 'calc(100% - 160px)',
          }}>
          {error as string}
        </p>
      )}
    </div>
  )
})
