import { create } from 'zustand'

interface State {
  isOpenFilter: boolean
  openFilter: () => void
  closeFilter: () => void
}

export const useFilterStore = create<State>()( ( set ) => ( {
  isOpenFilter: false,
  openFilter: () => set( { isOpenFilter: true } ),
  closeFilter: () => set( { isOpenFilter: false } ),
} ) )