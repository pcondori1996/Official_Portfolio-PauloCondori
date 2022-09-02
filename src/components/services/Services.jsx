import React from 'react'
import './services.scss'
import { BsBookmarkStar } from 'react-icons/bs'

const services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>


      <div className="container service_container">
        <article className='service'>
          <div className="service_head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service_list">
            <li>
              <BsBookmarkStar className='service_listIcons' />
              <p>User flow charts, diagrams
              </p>
            </li>

            <li>
              <BsBookmarkStar className='service_listIcons' />
              <p>Wireframes
              </p>
            </li>

            <li>
              <BsBookmarkStar className='service_listIcons' />
              <p>Content strategy
              </p>
            </li>

            <li>
              <BsBookmarkStar className='service_listIcons' />
              <p>Brand and design system development
              </p>
            </li>

      
          </ul>

        </article>

        <article className='service'>
          <div className="service_head">
            <h3>Web Development</h3>
          </div>

          <ul className="service_list">
            <li>
              <BsBookmarkStar className='service_listIcons' />
              <p>Custom Web Applications
              </p>
            </li>

            <li>
              <BsBookmarkStar className='service_listIcons' />
              <p>Web Support and Maintenance
              </p>
            </li>

            <li>
              <BsBookmarkStar className='service_listIcons' />
              <p>Front-End Web Development</p>  
            </li>

            <li>
              <BsBookmarkStar className='service_listIcons' />
              <p>Back-End Web Development
              </p>
            </li>

            <li>
              <BsBookmarkStar className='service_listIcons' />
              <p>Full-stack Web Development
              </p>
            </li>


          
          </ul>

        </article>

        <article className='service'>
          <div className="service_head">
            <h3>Consulting</h3>
          </div>

          <ul className="service_list">
            <li>
              <BsBookmarkStar className='service_listIcons' />
              <p>Create a great first impression of your company or clients who search online for information about your business, or if it applies, to your online store           </p>
            </li>

            <li>
              <BsBookmarkStar className='service_listIcons' />
              <p>Generate revenue by attracting clients and prospects with a robust online presence strategy
              </p>
            </li>

            <li>
              <BsBookmarkStar className='service_listIcons' />
              <p>Promote an online image to clients and prospects that is in line with the branding of the company
              </p>
            </li>

            <li>
              <BsBookmarkStar className='service_listIcons' />
              <p>Deliver marketing initiatives that boost your lines of communication with the public
              </p>
            </li>

            <li>
              <BsBookmarkStar className='service_listIcons' />
              <p>
                Ensure clients are heard and happy with finish product
              </p>
            </li>


    
          </ul>

        </article>
      </div>



    </section>
  )
}

export default services