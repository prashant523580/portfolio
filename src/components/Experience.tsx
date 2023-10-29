
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"
import { motion } from "framer-motion"
import { experiences } from "../constants"
import { textVariant } from '../utils/motion'
import { styles } from '../style'
import { SectionWrapper } from '../hoc'

const ExperienceCard =({experience} :any) => {
  return(
    <VerticalTimelineElement
      contentStyle={{backgroundColor:"black",color:"white"}}
      contentArrowStyle={{borderRight:"7px solid black"}}
      date={experience.date}
      iconStyle={{
        background:experience.iconBg
      }}
      icon={
        <div className='flex justify-center item-center w-full h-full'>
          <img src={experience.icon} alt={experience.company_name} className='w-[60%] h-[60%] object-contain' />
        </div>
      }
    >
      <div>
        <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
        <p className='text-gray-500 text-[16px] font-semibold' style={{margin:0}}>{experience.company_name}</p>
          <ul className='list-disc mt-5 ml-5 space-y-2'>
            {experience.points.map((point:any,ind:any) => (
              <li key={`experience-point-${ind}`} className='text-[14px] pl-1 text-white tracking-wider '>{point}</li>
            ))}
          </ul>
      </div>
  {experience.date}
    </VerticalTimelineElement>
  )
}
const Experience = () => {
  return (
    <>
      <motion.div
        variants={textVariant(0.05)}
      >
        <p className={styles.sectionSubText}>What i have done so far</p>
        <h1 className={styles.sectionHeadText}>Work Experiences</h1>
      </motion.div>
      <div className="mt-20 flex flex-col text-justify">
          <VerticalTimeline>
            {experiences.map((experience,index) => (
              <ExperienceCard key={index} experience={experience} />
            ))}
          </VerticalTimeline>
      </div>
    </>
  )
}

export default SectionWrapper(Experience,"work")