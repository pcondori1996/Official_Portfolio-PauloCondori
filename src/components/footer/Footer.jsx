import React from 'react'
import './footer.scss'
import { FiFacebook } from 'react-icons/fi'
import { AiOutlineLinkedin} from 'react-icons/ai'
import {BsGithub } from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer '>EGATOR</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer_socials">
        <a href="https://www.facebook.com/Paulo.Condori/"><FiFacebook /> </a>
        <a href="https://www.linkedin.com/in/paulosergio1996/"><AiOutlineLinkedin /></a>
        <a href="https://github.com/pcondori1996"><BsGithub /></a>
    </div>

    <div className="footer_copyright">
      <small>&copy; Paulo Sergio Condori Pinedo </small>
    </div>
    </footer >
  )
}

export default Footer