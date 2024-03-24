import { useLocation } from 'wouter'
import { animated } from '@react-spring/web'

import Fruits from '../components/fruits'

export default function Home() {
  const [, setLocation] = useLocation()

  return (
    <main className='relative min-h-screen grid place-content-center'>
      <div className='w-full flex justify-center items-center flex-col gap-8'>
        <animated.h1
          className='text-5xl font-bold text-indigo-700'
        >
          Comienza a descubrir las frutas!!!
        </animated.h1>

        <animated.button
          className='bg-indigo-700 text-white py-2 px-4 rounded shadow-md hover:scale-105 transition hover:skew-x-12 font-semibold'
          onClick={() => setLocation('/expert-system/question/1')}
        >
          Comenzar ahora!
        </animated.button>
      </div>

      <Fruits />
    </main>
  )
}
