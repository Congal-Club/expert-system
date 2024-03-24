import { useEffect } from 'react'
import confetti from 'canvas-confetti'
import { useLocation } from 'wouter'

import Fruits from '../components/fruits'
import { useFruit } from '../hooks/use-fruit'

export default function Fruit() {
  const [, setLocation] = useLocation()
  const { fruit, restartFruit } = useFruit()

  useEffect(() => {
    confetti({
      particleCount: 100,
      spread: 160,
      origin: { y: 0.6 },
    })
  }, [])

  const handleRestart = () => {
    restartFruit()
    setLocation('/')
  }

  return (
    <main className='relative min-h-screen pt-4 flex'>
      <div className='w-full max-w-[80%] mx-auto flex justify-center items-center flex-col gap-8'>
        <h1>
          {fruit == null ? (
            <h1 className='w-[95%] md:w-2/3 mx-auto text-center text-3xl md:text-5xl font-bold text-red-600'>
              Ninguna fruta coincide con las opciones que seleccionaste 😢
            </h1>
          ) : (
            <h1 className='w-[95%] md:w-2/3 mx-auto text-center text-3xl md:text-5xl font-bold text-indigo-600'>
              La fruta es: <span className='font-black'>{fruit.name}</span>!
            </h1>
          )}
        </h1>

        <button
          className='py-2 px-4 w-32 border rounded font-semibold text-white transition border-indigo-600 bg-indigo-600 hover:bg-indigo-700 hover:scale-105'
          onClick={handleRestart}
        >
          Reiniciar
        </button>
      </div>

      <Fruits />
    </main>
  )
}
