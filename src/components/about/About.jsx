import React from 'react'
import './about.scss';
import AboutPic from '../../assets/aboutMepic.jpg'
import { GiAchievement } from 'react-icons/gi'
import { AiTwotoneFolderOpen } from 'react-icons/ai'
import { FaTools } from 'react-icons/fa'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={AboutPic} alt='About Image' />
          </div>
        </div>


        <div className="about_content">
          <div className="about_cards">

            <article className='about-card'>
              <GiAchievement className='about_icons' />

              <h5>Coding Languages</h5>
              <small>3 and more to come</small>
            </article>
            <article className='about-card'>
              <AiTwotoneFolderOpen className='about_icons' />

              <h5>Projects</h5>
              <small>15+ Completed</small>
            </article>
            <article className='about-card'>
              <FaTools className='about_icons' />

              <h5>Dev Tools</h5>
              <small>20+ Known & Used</small>
            </article>

          </div>

            <p className='aboutText'>
          Hi, I'm Paulo Condori Pinedo<br></br>
          I'm a full-stack developer located in Atlanta, Georgia.
          I recently graduated from Georgia Institute of Technology Full stack developer bootcamp.
          I'm excited to take to take on my the next challenage in my tech career.
                 </p>


        <a href='#contact' className='btn btn-primary'>Lets Talk</a>
        </div>
      </div>
      
    </section >


  )
}

export default About