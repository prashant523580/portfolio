
import { motion } from "framer-motion"
import { styles } from '../style'
import { ComputersCanvas } from '.'
import { Link } from 'react-scroll'
const Hero = () => {
  return (
    <section className="relative w-full  h-screen mx-auto ">
      <div className={` ${styles.paddingX} absolute inset-0  max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          {/* <div className='w-5 h-5 rounded-full bg-[#a52424]' /> */}
          <div className="w-1 h-80 sm:h-40 bg-gradient-to-b from-[#a52424] "></div>
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Hi, I&apos;m <span className='text-[#a52424]'>Prashant </span></h1>
          <p className={`${styles.heroSubText} text-white mt-2`}>
            I develop user interface and web applications.
          </p>
        </div>
      </div>
      <ComputersCanvas />
      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <Link to='about' offset={-70}>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-gray-500 mb-1'
            />
          </div>
        </Link>
      </div>
    </section>
  )
}

export default Hero