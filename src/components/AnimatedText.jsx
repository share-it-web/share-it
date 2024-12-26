import Typewriter from 'typewriter-effect'

export const AnimatedText = () => {
  const styledText =
    'font-mono text-2xl sm:text-2xl md:text-4xl leading-loose bg-clip-text text-transparent bg-gradient-to-r from-[#314aa9] via-[#368beb] to-[#83d6e7]'
  const typeText = 'font-mono sm:text-lg md:text-4xl leading-loose'

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
