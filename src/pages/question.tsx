import { useLocation, useParams } from 'wouter'

import Card from '../components/card'
import Fruits from '../components/fruits'
import { useFruit } from '../hooks/use-fruit'
import { useQuestion } from '../hooks/use-question'
import { useOptionsStore } from '../store/options.store'

export default function Question() {
  const [, setLocation] = useLocation()
  const params = useParams()
  const { question } = useQuestion(+params.question! ?? 1)
  const state = useOptionsStore((state) => state)
  const { determineFruit } = useFruit()

  const handleSelect = (option: string) => {
    switch (question.id) {
      case 1: return state.selectColor(option)
      case 2: return state.selectTexture(option)
      case 3: return state.selectFlavor(option)
      case 4: return state.selectSize(option)
      case 5: return state.selectShape(option)
      case 6: return state.selectSkin(option)
      case 7: return state.selectSeeds(option)
      case 8: return state.selectOriginRegion(option)
      case 9: return state.selectAroma(option)
    }
  }

  const handleGoPrev = () => {
    setLocation(`/question/${question.id - 1}`)
  }

  const handleGoNext = () => {
    setLocation(`/question/${question.id + 1}`)
  }

  const handleDetermineFruit = () => {
    determineFruit()
    setLocation('/fruit')
  }

  const thereIsAnOptionSelected = () => {
    switch (question.id) {
      case 1: return state.color !== ''
      case 2: return state.texture !== ''
      case 3: return state.flavor !== ''
      case 4: return state.size !== ''
      case 5: return state.shape !== ''
      case 6: return state.skin !== ''
      case 7: return state.seeds !== ''
      case 8: return state.origin_region !== ''
      case 9: return state.aroma !== ''
    }

    return false
  }

  return (
    <main className='relative min-h-screen pt-4 flex'>
      <div className='w-full max-w-[80%] mx-auto flex justify-center items-center flex-col gap-8'>
        <section>
          <h2 className='text-center text-xl font-semibold mb-2'>
            Pregunta numero #{question.id}
          </h2>
          
          <h1 className='text-center text-4xl'>
            {question.question}
          </h1>
        </section>

        <section className='w-full grid grid-cols-6 gap-4 place-content-center'>
          {question.options.map((option, index) => (
            <button key={index} onClick={() => handleSelect(option)}>
              <Card
                option={option}
                isSelected={
                  (state.color === option && question.id === 1) ||
                  (state.texture === option && question.id === 2) ||
                  (state.flavor === option && question.id === 3) ||
                  (state.size === option && question.id === 4) ||
                  (state.shape === option && question.id === 5) ||
                  (state.skin === option && question.id === 6) ||
                  (state.seeds === option && question.id === 7) ||
                  (state.origin_region === option && question.id === 8) ||
                  (state.aroma === option && question.id === 9)
                }
              />
            </button>
          ))}
        </section>

        <section className='flex justify-center items-center gap-4'>
          <button
            className={`
              text-black ${question.id === 1 && 'text-gray-600'}
              py-2 px-4 w-32 border rounded font-semibold
              ${question.id === 1 ? 'border-indigo-400 text-indigo-400' : 'border-indigo-600 text-indigo-600'}
            `}
            onClick={handleGoPrev}
            disabled={question.id === 1}
          >
            Atrás
          </button>
          
          {question.id !== 9 ? (
            <button 
              className={`
                text-black ${question.id === 9 && 'text-gray-600'} py-2 px-4 w-32 border rounded font-semibold
                ${question.id === 9 || !thereIsAnOptionSelected() ? 'border-indigo-400 text-indigo-400' : 'border-indigo-600 text-indigo-600'}
              `}
              onClick={handleGoNext}
              disabled={question.id === 9 || !thereIsAnOptionSelected()}
            >
              Siguiente
            </button>
          ) : (
            <button
              className={`
                py-2 px-4 w-32 border rounded font-semibold text-white transition
                ${!state.isAllSelected() && 'opacity-50'}
                border-indigo-600 bg-indigo-600
                hover:bg-indigo-700 hover:scale-105
              `}
              onClick={handleDetermineFruit}
              disabled={!state.isAllSelected()}
            >
              Terminar
            </button>
          )}
        </section>
      </div>

      <Fruits />
    </main>
  )
}
