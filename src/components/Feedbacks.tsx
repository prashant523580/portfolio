
import { motion } from "framer-motion"
import { styles } from '../style'
import { fadeIn, textVariant } from '../utils/motion'
import { testimonials } from '../constants'

const FeedbackCard = ({index,name,testimonial,designtion,company,image} : any) => {
  return(
      <motion.div
        variants={fadeIn(" ","spring",index*0.5,0.75)}
        className='bg-black p-10 rounded-3xl  sm:w-[320px] w-full'
      >
        <p className='text-white font-black text-[48px]'>"</p>
          <div className="mt-1">
          <p className='text-white tracking-wider text-[18px]'> {testimonial}</p>
          <div className={'mt-7 flex justify-between items-center gap-1'}>
              <div className="flex-1 flex flex-col">
                <p className='font-medium text-white text-[16px]'>
                  <span className='blue-text-gradient'>@</span>
                  {name}
                </p>
                <p className='mt-1 text-gray-500  text-[12px]'>
                  {designtion} of {company}
                </p>
              </div>
        <img  src={image} alt={`feedback-by-${name}`}
          className="w-10 h-10 rounded-full object-cover"
        />
          </div>
          </div>
      </motion.div>
  )
}
const Feedbacks = () => {
  return (
    <>
      <div className="mt-12 bg-gray-800 rounded-[20px]">
        <div className={`${styles.padding} bg-gray-900 rounded-t-2xl min-h-[300px]`}>
          <motion.div
            variants={textVariant("")}
          >
            <p className={styles.sectionSubText}>Whats other say</p>
            <h2 className={styles.sectionHeadText}>Testimonials</h2>
          </motion.div>
        </div>
        <div className={`${styles.paddingX} -mt-20 pb-14  flex flex-wrap justify-center gap-10`}>
          {
            testimonials.map((testimonial,index) => (
              <FeedbackCard key={`testimonial-${index}`} index={index} {...testimonial} />
            ))
          }
        </div>
      </div>
    </>
  )
}

export default Feedbacks