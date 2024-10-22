import React from 'react'

interface Props {
  value: number
  className?: string
}

export const CurrencyFormat = ({ value, className }: Props) => {
  return (
    <span className={className}>
      {new Intl.NumberFormat('es-AR', {
        style: 'currency',
        currency: 'ARS',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }).format(value)}
    </span>
  )
}
