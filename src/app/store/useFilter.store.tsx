import { create } from 'zustand'

interface Filter {
  isOpenFilter: boolean
  toggleFilter: () => void
}

export const useFilter = create<Filter>((set) => ({
  isOpenFilter: false,
  toggleFilter: () => set((state) => ({ isOpenFilter: !state.isOpenFilter })),
}))
