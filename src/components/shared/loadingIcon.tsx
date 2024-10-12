import React from 'react'
import { CgSpinner } from 'react-icons/cg'

interface Props {
  className?: string
}

export const LoadingIcon = ({ className }: Props) => {
  return <CgSpinner className={`${className} animate-spin`} />
}
