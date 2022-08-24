import React from 'react'
import './header.scss'
import HBH from './HBH'
import HSocials from './HSocials'
import ME from '../../assets/mainprofile.jpg'

const Header = () => {
return (
    <header>
      <div className="container header_container">
      <h5>Hello I'm</h5>
      <h1>Paulo Sergio Condori Pinedo</h1>
      <h5 className="text-light">Fullstack Developer</h5>
      <HBH />
    
   
      <div className='Imageholder'>
        <img src={ME} className="mainPic" alt="profilePic" />
     
      </div>
      
      <HSocials />
      <a href='#contact' className='scroll-down'>Scroll Down</a>
   
    </div>

    </header>
  )
}


export default Header