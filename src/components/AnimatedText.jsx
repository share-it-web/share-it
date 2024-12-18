import React, { useEffect, useState } from 'react'
import anime from 'animejs'

const greetings = [
  'Hola Mundo!',
  'Hello World!',
  'Bonjour le Monde!',
  'Hallo Welt!',
  'Ciao Mondo!',
]

const AnimatedText = () => {
  const [currentGreeting, setCurrentGreeting] = useState(greetings[0])

  useEffect(() => {
    let index = 0
    const interval = setInterval(() => {
      index = (index + 1) % greetings.length
      setCurrentGreeting(greetings[index])

      anime({
        targets: '.animated-text',
        opacity: [0, 1],
        duration: 1000,
        easing: 'easeInOutQuad',
      })
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <h1 className='animated-text text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-purple-600'>
      {currentGreeting}
    </h1>
  )
}

export default AnimatedText
