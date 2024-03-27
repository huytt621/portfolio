import { motion } from 'framer-motion'

import { styles } from '../styles'
import { ComputersCanvas } from './canvas'

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#bb9af7]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I&apos;m <span className='text-[#bb9af7]'>Huy</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I do things sometimes
          </p>
        </div>
      </div>

      <ComputersCanvas />
      <div className='absolute bottom-10 w-full flex justify-center items-center'>
        <a href='#about'>
          <motion.div
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: 'loop',
            }}
            className='w-0 h-0 border-l-[10px] border-l-transparent border-t-[15px] border-t-secondary border-r-[10px] border-r-transparent mb-1'
          />
        </a>
      </div>
    </section>
  )
}

export default Hero
