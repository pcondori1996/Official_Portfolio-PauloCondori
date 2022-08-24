import React from 'react'
import { useState } from 'react'
import { AiFillHome } from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'
import { AiFillDatabase } from 'react-icons/ai'
import { FaServicestack } from 'react-icons/fa'
import { MdOutlineContactPhone } from 'react-icons/md'

import './nav.scss'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')

  return (
    <nav>
      <a href="#" alt='Top of Page' onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''} ><AiFillHome /></a>
      <a href="#about" alt='About' onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''} ><AiOutlineUser /></a>
      <a href="#experience" alt='Experience'  onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><AiFillDatabase /></a>
      <a href="#services" alt='Service'  onClick={() => setActiveNav('#service')} className={activeNav === '#service' ? 'active' : ''}><FaServicestack /></a>
      <a href="#contact" alt='Contact'  onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><MdOutlineContactPhone /></a>
    </nav>
  )
}

export default Nav