
import { Tilt } from 'react-tilt'
import { motion } from "framer-motion"
import { styles } from '../style'
// import { github } from "../assets"
import { projects } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'
const ProjectCard = ({index,name,tags,image,source_code_link} :any) => {
  return(
    <motion.div
    variants={fadeIn("up","spring",index*0.5,0.75)}
    >
      <Tilt
        options={{
          max:45,
          scale:1,
          speed:450
        }}
        className={'bg-gray-900 p-5 rounded-2xl sm:w-[340px] w-full'}
      >
        <div className="relative w-full h-[230px]">
            <img src={image} alt={name} className='h-full w-full object-cover rounded-2xl' />
            <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
              <div onClick={() => {
                typeof window !== undefined && window.open(source_code_link,"blank") 
              }}
                className='black-gradient w-10 h-10 rounded-full cursor-pointer flex justify-center items-center'
              >
                {/* <img src={github}
                  alt={'github'}
                  className={'w-1/2 h-1/2 object-contain'}
                  /> */}
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
</svg>

              </div>
            </div>

        </div>
        <div className="mt-5">
          <h3 className={`text-white font-bold text-[24px]`}>{name}</h3>
          {/* <p className='mt-2 text-gray-500 text-[14px]'>{description}</p> */}
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag:any) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>#{tag.name}</p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  )
}
const Works = () => {
  return (
    <>
      <motion.div
        variants={textVariant(0.05)}
        className='mt-4'
      >
        <p className={styles.sectionSubText}>My Works</p>
        <h1 className={styles.sectionHeadText}>Projects</h1>
      </motion.div>
      <div className="w-full flex">
        {/* <motion.p
          variants={fadeIn("","",0.1,1)}
          className='mt-3 mx-auto text-gray-500 text-[17px] max-w-3xl leading-[30px]'
        >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At officia doloremque ipsam, expedita voluptate unde, mollitia atque corporis voluptatibus vero suscipit assumenda, laboriosam odit eius exercitationem? Dicta sapiente placeat necessitatibus!
        </motion.p> */}
      </div>
      <div className="flex flex-wrap mt-20 gap-5 justify-center">
        {
          projects.map((project,index) => (
              <ProjectCard
                key={`project-${index}`}
                {...project}
                index={index}
              />
          ))
        }
      </div>
    </>
  )
}

export default SectionWrapper(Works, "work")