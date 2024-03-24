import { StateCreator, create } from 'zustand'
import { devtools } from 'zustand/middleware'
import type { Fruit } from '../types/fruit.d'

interface FruitStore {
  fruit: Fruit | null
}

interface FruitActions {
  setFruit: (fruit: Fruit) => void
  cleanFruit: () => void
}

const fruitApi: StateCreator<FruitStore & FruitActions, [['zustand/devtools', never]]> = (set) => ({
  fruit: null,
  setFruit: (fruit: Fruit) => set({ fruit }),
  cleanFruit: () => set({ fruit: null })
})

export const useFruitStore = create<FruitStore & FruitActions>()(
  devtools(fruitApi, { name: 'options-store' })
)
