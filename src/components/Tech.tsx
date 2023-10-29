
import { technologies } from '../constants'
import { BallCanvas } from '.'

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10 pb-8'>
      {technologies.map((tech) =>(
        <div className="h-28 w-28" key={tech.name}>
          <BallCanvas icon={tech.icon} />
        </div>
      ))}
    </div>
  )
}

export default Tech