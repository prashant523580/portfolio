import { useState, useRef } from 'react'
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';
import { styles } from '../style';
import { EarthCanvas} from '.';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';

const Contact = () => {
  const formRef = useRef<any>();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",

  });
  const [loading, setLoading] = useState(false);
  const handleChange = (e:any) => {
    const {name,value} = e.target;
    setForm({...form, [name]:value})
  }
  const handleSubmit = (e:any) => {
    e.preventDefault();
  
    setLoading(true);
    emailjs.send('service_9iseoqh','template_7sp6mkq',{
      from_name : form.name,
      to_name :"Prashant",
      from_email: form.email,
      to_email:"prashant.thapa62758@gmail.com",
      message:form.message,
    },"fvyz2J6CN0lg_dxCW").then(() => {
      setLoading(false)
      alert("Thank you. I will get back you as soon as possible")
      setForm({
        email:"",
        name:"",
        message:""
      })
    })
  }
  return (
    <div className="flex xl:mt-12 xl:flex-row flex-col-reverse  gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-gray-800 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get In Touch</p>
        <h3 className={styles.sectionHeadText}>Contact</h3>

        <form action="" ref={formRef} onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8 text-justify'
        >
          <label htmlFor="name" className='flex flex-col'>
            <span className='text-white mb-4 font-medium'>Name</span>
            <input
              placeholder='Write you Full Name.'
              type='text'
              name="name"
              onChange={handleChange}
              value={form.name}
              className='bg-gray-900 py-4 px-6 placeholder:text-gray-400 text-white rounded-lg outlined-none border-none font-medium'
            />
          </label>

          <label htmlFor="name" className='flex flex-col'>
            <span className='text-white mb-4 font-medium '>Email</span>
            <input
              type='email'
              name="email"
              placeholder='Write Your Email.'
              onChange={handleChange}
              value={form.email}
              className='bg-gray-900 py-4 px-6 placeholder:text-gray-400 text-white rounded-lg outlined-none border-none font-medium'
            />
          </label>
          <label htmlFor="message" className='flex flex-col'>
            <span className='text-white mb-4 font-medium'>Message</span>
            <textarea
              placeholder='What do you want to say?'
              rows={7}
              name='message'
              onChange={handleChange}
              value={form.message}
              className='bg-gray-900 py-4 px-6 placeholder:text-gray-400 text-white rounded-lg outlined-none border-none font-medium'
            />
          </label>
          <button type='submit' className='bg-gray-900 py-3 px-8 outline-none w-fit text-white font-bold shadow-sm shadow-gray-200 rounded-xl'>
            {loading ? "Sending" : "Send"}
          </button>
        </form>
      </motion.div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px] relative'
      >
      
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact,"contact")