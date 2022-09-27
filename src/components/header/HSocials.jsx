import React from 'react'
import {AiFillGithub} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai';
import {BsFillDisplayFill} from 'react-icons/bs'
import './header.scss'

const HSocials = () => {
  return (
    <div className="header-socials">
        <a href="https://www.linkedin.com/in/paulosergio1996/" target="_blank" alt='My profile'><AiFillLinkedin/></a>
        <a href="https://github.com/pcondori1996" target="_blank" alt='My Github Repo'><AiFillGithub/></a>
        <a href="https://pcondori1996.github.io/Paulo_Condori_Portfolio/" target="_blank" alt='Old Portfolio'><BsFillDisplayFill/></a>
    </div>

  )
}

export default HSocials