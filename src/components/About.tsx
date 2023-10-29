import { motion} from "framer-motion"
import { Tilt } from 'react-tilt'
import {styles} from "../style"
import { fadeIn,textVariant } from '../utils/motion'
import { services } from '../constants'
import { SectionWrapper } from '../hoc'

const ServiceCard = ({title,index,icon} :any) => {
    return(

      <Tilt className="xs:w-[250px] w-full cursor-pointer">
        <motion.div
          variants={fadeIn("right","spring",0.5*index,0.75)}
          className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card '
        >
          <div
            // options={{
            //   max:45,
            //   scales:1,
            //   speed:450
            //  }}
            className='bg-[#0b0404] rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col '
          >
              <img src={icon}  alt={title} className='w-16 h-16 object-conain'/>
              <h3 className='text-[20px] text-white text-center font-bold'>{title}</h3>
          </div>
        </motion.div>
      </Tilt> 
    )
}
const About = () => {
  return (
    <>
    <motion.div 
      variants={textVariant("")}

    >
      <p className={styles.sectionSubText}>Introduction</p>
      <h1 className={styles.sectionHeadText}>Overview</h1>
    </motion.div>
    <motion.p
      variants={fadeIn("","",0.1,1)}
      className={'mt-4 text-gray-500  text-[17px] max-w-3xl mx-auto leading-[30px]'}
    >
      I am a web developer from Nepal with a passion for building high-quality websites for small and medium-sized businesses..

With years of experience in the industry, I have honed my skills in HTML, CSS, JavaScript, ReactJS, NextJS, Tailwind CSS, and SEO, allowing me to deliver top-notch web development solutions that meet my clients needs and exceed their expectations.
   </motion.p>
    <div className="mt-20 grid grid-cols-2 flex-wrap gap-20">
      {services.map((service,index) => (
          <ServiceCard key={service.title} index={index} {...service} />
      ))}

    </div>
      </>
  )
}

export default SectionWrapper(About,"about")