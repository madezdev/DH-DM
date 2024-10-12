'use client'
import { useState, useEffect } from 'react'

export default function useLocalStorage( key: string ) {
  const [ storedValue, setStoredValue ] = useState( "" )

  useEffect( () => {
    try {
      const item = window.localStorage.getItem( key )
      if ( item ) {
        const initialValue = JSON.parse( item )
        setStoredValue( initialValue.reverse() ?? "" )
      } else {
        setStoredValue( "" )
      }
    } catch ( error ) {
      setStoredValue( "" )
      console.error( 'localStorage error:', error )
    }
  }, [ key ] )

  const setValue = ( value: string ) => {
    try {
      setStoredValue( value )
      window.localStorage.setItem( key, JSON.stringify( value ) )
    } catch ( error ) {
      console.error( error )
    }
  }

  const removeValue = () => {
    try {
      window.localStorage.removeItem( key )
      setStoredValue( "" )
    } catch ( error ) {
      console.error( error )
    }
  }

  return { storedValue, setValue, removeValue }
}