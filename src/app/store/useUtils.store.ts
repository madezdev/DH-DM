import { create } from 'zustand'

interface UtilsStore {
  selectedCardId: number
  setCardId: ( selectedCardId: number ) => void
  getCardId: () => number
}

export const useUtilsStore = create<UtilsStore>( ( set, get ) => ( {
  selectedCardId: 0,
  setCardId: ( selectedCardId: number ) => set( { selectedCardId } ),
  getCardId: () => get().selectedCardId,
} ) )
