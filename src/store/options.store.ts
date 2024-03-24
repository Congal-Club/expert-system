import { StateCreator, create } from 'zustand'
import { devtools } from 'zustand/middleware'

interface OptionsStore {
  color: string
  texture: string
  flavor: string
  size: string
  shape: string
  skin: string
  seeds: string
  origin_region: string
  aroma: string
}

interface OptionsActions {
  selectColor: (color: string) => void
  selectTexture: (texture: string) => void
  selectFlavor: (flavor: string) => void
  selectSize: (size: string) => void
  selectShape: (shape: string) => void
  selectSkin: (skin: string) => void
  selectSeeds: (seeds: string) => void
  selectOriginRegion: (origin_region: string) => void
  selectAroma: (aroma: string) => void
  cleanSelects: () => void
  isAllSelected: () => boolean
}

const initialState: OptionsStore = {
  color: '',
  texture: '',
  flavor: '',
  size: '',
  shape: '',
  skin: '',
  seeds: '',
  origin_region: '',
  aroma: ''
}

const optionsApi: StateCreator<OptionsStore & OptionsActions, [['zustand/devtools', never]]> = (set, get) => ({
  ...initialState,
  selectColor: (color) => set({ color }),
  selectTexture: (texture) => set({ texture }),
  selectFlavor: (flavor) => set({ flavor }),
  selectSize: (size) => set({ size }),
  selectShape: (shape) => set({ shape }),
  selectSkin: (skin) => set({ skin }),
  selectSeeds: (seeds) => set({ seeds }),
  selectOriginRegion: (origin_region) => set({ origin_region }),
  selectAroma: (aroma) => set({ aroma }),
  cleanSelects: () => set({ ...initialState }),
  isAllSelected: () => {
    const { color, texture, flavor, size, shape, skin, seeds, origin_region, aroma } = get()
    return color !== '' && texture !== '' && flavor !== '' && 
      size !== '' && shape !== '' && skin !== '' && seeds !== '' && 
      origin_region !== '' && aroma !== ''
  }
})

export const useOptionsStore = create<OptionsStore & OptionsActions>()(
  devtools(optionsApi, { name: 'options-store' })
)
