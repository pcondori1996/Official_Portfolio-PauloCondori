import React from 'react'
import './experience.scss'
import { FaCheckCircle } from 'react-icons/fa'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

  
      <div className='container experience_container'>
        <div className='experience_front'>
          <h3>Frontend Development</h3>
          <div className='experience_content'>
            <article className='experience_details'>
              <FaCheckCircle className='expIcons'/>
              <h4>HTML</h4>
            </article>

            <article className='experience_details'>
              <FaCheckCircle className='expIcons'/>
              <h4>CSS3 & SASS</h4>
            </article>

            <article className='experience_details'>
              <FaCheckCircle className='expIcons'/>
              <h4>JavaScript & JQuery</h4>
            </article>

            <article className='experience_details'>
              <FaCheckCircle className='expIcons'/>
              <h4>Heroku & Git</h4>
            </article>

            <article className='experience_details'>
              <FaCheckCircle className='expIcons'/>
              <h4>Java</h4>
            </article>

            <article className='experience_details'>
              <FaCheckCircle className='expIcons'/>
              <h4>BootStrap</h4>
            </article>

            <article className='experience_details'>
              <FaCheckCircle className='expIcons'/>
              <h4>React</h4>
            </article>

            <article className='experience_details'>
              <FaCheckCircle className='expIcons'/>
              <h4>Progressive Web Applications</h4>
            </article>

          
          </div>
        </div>


     
        <div className='experience_backend'>
          <h3>Backend Development</h3>
          <div className='experience_content'>
          <article className='experience_details'>
              <FaCheckCircle className='expIcons'/>
              <h4>MySQL, MongoDB</h4>
            </article>

            <article className='experience_details'>
              <FaCheckCircle className='expIcons'/>
              <h4>Express.js</h4>
            </article>

            <article className='experience_details'>
              <FaCheckCircle className='expIcons'/>
              <h4>Node.js</h4>
            </article>

            <article className='experience_details'>
              <FaCheckCircle className='expIcons'/>
              <h4>GraphQL</h4>
            </article>

            <article className='experience_details'>
              <FaCheckCircle className='expIcons'/>
              <h4>API, Rest, JSON, AJAX</h4>
            </article>

            <article className='experience_details'>
              <FaCheckCircle className='expIcons'/>
              <h4>Unit Testing, Jest, Linting</h4>
            </article>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Experience