import { create } from 'zustand'

interface FilterStore {
  isOpenFilter: boolean
  selectedFilter: string
  toggleFilterToday: () => void
  setSelectedFilter: ( filter: string ) => void
  getSelectedFilter: () => string
  resetFilter: () => void
}

export const useFilterStore = create<FilterStore>( ( set, get ) => ( {
  isOpenFilter: false,
  selectedFilter: '',
  toggleFilterToday: () => set( { isOpenFilter: !get().isOpenFilter } ),
  setSelectedFilter: ( filter ) => set( { selectedFilter: filter } ),
  getSelectedFilter: () => get().selectedFilter || '',
  resetFilter: () => set( { selectedFilter: '' } )
} ) )