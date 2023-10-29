import React from 'react'
import { styles } from '../style'
// import { Link } from 'react-router-dom'
import {Link} from "react-scroll";
import { navLinks } from '../constants'
import logo from "../assets/logo.png"
import menu from "../assets/menu.svg"
import close from "../assets/close.svg"
const Navbar = () => {
  // const [active,setActive] = React.useState('');
  const [toggle,setToggle] = React.useState<boolean>(false)
  return (
    <nav
    className={` sticky ${styles.paddingX} w-full flex items-center py-5 left-0  top-0 z-20 bg-black`}
    >
        <div className={`w-full flex justify-between items-center max-w-7xl mx-auto`}>
          <Link to={"/"}
          className='flex items-center gap-4'
          onClick={() => {
            // setActive('')
           typeof window !== undefined && window.scrollTo(0,0)
          }}
          >
            <img src={logo} alt='logo' className='w-9 h-9 object-contain' />
            <p className='text-white text-[18px] font-bold cursor-pointer'>Prashant</p>
          </Link>
          <ul className='list-none hidden sm:flex  flex-row gap-10'>
            {
              navLinks.map((link) => (
                <li key={link.id}
                // onClick={() => setActive(link.title)}
                className={`cursor-pointer text-gray-400`}
                >
                  <Link to={link.id} offset={-70} activeClass='active' >{link.title}</Link>
                </li>
              ))
            }
          </ul>

          <div className="sm:hidden flex flex-1 justify-end items-center">
            <img src={toggle ? close :menu} alt='menu' className='w-[28px] h-[28px] object-contain curspr-pointer' 
            onClick={() => setToggle(!toggle)}
            />
            <div className={`${!toggle ? "hidden" :"flex"} p-6 bg-gradient absolute top-20 right-0 my-2 min-w-[140px] z-10 rounded-xl `}>
            <ul className='list-none flex justify-end items-start flex-col  gap-4'>
            {
              navLinks.map((link) => (
                <li key={link.id}
                onClick={() => {
                  setToggle(!toggle)
                  // setActive(link.title)
                }}
                className={` font-poppins font-medium text-[16px] cursor-pointer `}>
                  <Link to={link.id} offset={-70} activeClass='active' >{link.title}</Link>
                </li>
              ))
            }
          </ul>
            </div>
          </div>
        </div>
        <style>
          {`
          .active{
            color: white;
          }
          `}
        </style>
    </nav>
  )
}

export default Navbar