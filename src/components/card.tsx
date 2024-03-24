/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, MouseEvent, useCallback } from 'react'

function throttle<T extends (...args: any[]) => any>(
  func: T,
  delay: number
): (...args: Parameters<T>) => void {
  let lastCall = 0

  return (...args: Parameters<T>) => {
    const now = new Date().getTime()

    if (now - lastCall < delay) {
      return
    }
    
    lastCall = now
    
    return func(...args)
  }
}

interface Props {
  option: string
  isSelected?: boolean
}

export default function Card({ option, isSelected = false }: Props) {
  const [rotate, setRotate] = useState({ x: 0, y: 0 })

  const onMouseMove = useCallback(
    throttle((e: MouseEvent<HTMLDivElement>) => {
      const card = e.currentTarget
      const box = card.getBoundingClientRect()
      const x = e.clientX - box.left
      const y = e.clientY - box.top
      const centerX = box.width / 2
      const centerY = box.height / 2
      const rotateX = (y - centerY) / 4
      const rotateY = (centerX - x) / 4

      setRotate({ x: rotateX, y: rotateY })
    }, 100),
    []
  )

  const onMouseLeave = () => {
    setRotate({ x: 0, y: 0 })
  }

  return (
    <>
      <div
        className='card relative w-full aspect-video transition-[all_400ms_cubic-bezier(0.03,0.98,0.52,0.99)_0s] will-change-transform'
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        style={{
          transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) scale3d(1, 1, 1)`,
          transition: 'all 400ms cubic-bezier(0.03, 0.98, 0.52, 0.99) 0s',
        }}
      >
        <div className={`group relative flex h-full w-full select-none items-center justify-center rounded-lg border border-gray-900 bg-gradient-to-tr ${isSelected ? 'from-green-500 to-green-600' : 'from-white to-gray-50'} text-base font-light text-gray-300`}>
          <span className={`text-md bg-gradient-to-t ${ isSelected ? 'from-white to-gray-50' : 'from-gray-900 to-gray-950'} bg-clip-text font-bold text-transparent`}>
            {option}
          </span>
        </div>
      </div>
    </>
  )
}
