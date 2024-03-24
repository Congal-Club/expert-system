import data from '../data/fruits.json'
import { useFruitStore } from '../store/fruit.store'
import { useOptionsStore } from '../store/options.store'
import type { Color, Fruits, Shape } from '../types/fruit.d'

export function useFruit() {
  const { fruits } = data as Fruits
  const state = useOptionsStore((state) => state)
  const fruit = useFruitStore((state) => state.fruit)
  const setFruit = useFruitStore((state) => state.setFruit)
  const cleanFruit = useFruitStore((state) => state.cleanFruit)

  const determineFruit = () => {
    const filtered = fruits
      .filter((fruit) => fruit.color.includes(state.color as Color))
      .filter((fruit) => fruit.texture === state.texture)
      .filter((fruit) => fruit.flavor === state.flavor)
      .filter((fruit) => fruit.size === state.size)
      .filter((fruit) => fruit.shape.includes(state.shape as Shape))
      .filter((fruit) => fruit.skin === state.skin)
      .filter((fruit) => fruit.seeds === state.seeds)
      .filter((fruit) => fruit.origin_region === state.origin_region || state.origin_region === 'No estoy seguro')
      .filter((fruit) => fruit.aroma.includes(state.aroma) || state.aroma === 'No estoy seguro')

    if (filtered.length > 0) setFruit(filtered[0])
  }

  const restartFruit = () => {
    cleanFruit()
    state.cleanSelects()
  }

  return {
    fruits,
    fruit,
    determineFruit,
    restartFruit
  }
}
