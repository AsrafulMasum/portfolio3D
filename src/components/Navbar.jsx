import { useState } from 'react'

import {styles} from '../styles'
import { Link } from 'react-router-dom'
import { navLinks } from '../constants'
import { menu, logo, close } from '../assets'

const Navbar = () => {
  const [active, setActive] = useState('')
  const [toggle, setToggle] = useState(false)
  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link to='/' className='flex items-center' onClick={() => {setActive(''); window.scrollTo(0, 0)}}>
          <img src={logo} alt="Logo" className='w-10 h-10 object-contain' />
          <p className='pr-2'>|</p>
          <p className='text-white text-lg font-bold cursor-pointer'>Masum</p>
        </Link>
        <ul className='list-none hidden sm:flex gap-10'>
          {navLinks?.map(link => (
            <li key={link?.id} className={`${active === link?.title ? 'text-white' : 'text-secondary'} hover:text-white text-lg font-medium cursor-pointer `} onClick={() => setActive(link?.title)}>
              <a href={`#${link?.id}`}>{link?.title}</a>
            </li>
          ))}
        </ul>
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img src={toggle ? close : menu} alt="Menu" className='w-5 h-5 object-contain cursor-pointer' onClick={() => setToggle(!toggle)} />
          <div className={`${!toggle ? "hidden" : "flex"} p-6 black-gradient absolute top-16 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
          <ul className='list-none flex flex-col justify-end items-start gap-4'>
          {navLinks?.map(link => (
            <li key={link?.id} className={`${active === link?.title ? 'text-white' : 'text-secondary'} font-poppins font-medium cursor-pointer text-base`} onClick={() => {setToggle(!toggle); setActive(link?.title)}}>
              <a href={`#${link?.id}`}>{link?.title}</a>
            </li>
          ))}
        </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar