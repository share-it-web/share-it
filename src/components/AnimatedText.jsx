import Typewriter from 'typewriter-effect'

export const AnimatedText = () => {
  const styledText =
    'font-mono text-4xl leading-loose bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-purple-600'
  const typeText = 'font-mono text-4xl leading-loose'

  return (
    <div className='flex items-center justify-center text-center'>
      <p className={styledText}>console.log</p>
      <p className={styledText}>("</p>
      <p className={typeText}>
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .pauseFor(300)
              .typeString('<span>¡Hola Mundo!</span>')
              .pauseFor(300)
              .deleteAll('natural')
              .typeString('<span>Hello World!</span>')
              .deleteAll('natural')
              .typeString('<span>Ciao Mondo!</span>')
              .deleteAll('natural')
              .typeString('<span>こんにちは世界！</span>')
              .deleteAll('natural')
              .pauseFor(300)
              .start()
          }}
          options={{
            autoStart: true,
            loop: true,
          }}
        />
      </p>
      <p className={styledText}>")</p>
    </div>
  )
}
