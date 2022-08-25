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
              <p>Lorem ipsum dolor sit amet, consecm repellat animi, sed voluptate optio.
              </p>
            </li>

            <li>
              <BsBookmarkStar className='service_listIcons' />
              <p>Lorem ipsum ndaeanimi, sed voluptate optio.
              </p>
            </li>

            <li>
              <BsBookmarkStar className='service_listIcons' />
              <p>Lorem sentium, necessiimi, sed voluptate optio.
              </p>
            </li>

            <li>
              <BsBookmarkStar className='service_listIcons' />
              <p>Lorem ipsum doloue deserui, sed voluptate optio.
              </p>
            </li>

            <li>
              <BsBookmarkStar className='service_listIcons' />
              <p>Lorem ipsum dolortemporibus praeriam repellat animi, sed voluptate optio.
              </p>
            </li>


            <li>
              <BsBookmarkStar className='service_listIcons' />
              <p>Lorem ipsum dolor siibus prais aperiam repellat animi, sed voluptate optio.
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
              <p>Lorem ipsum dolor sit amet,  optio.
              </p>
            </li>

            <li>
              <BsBookmarkStar className='service_listIcons' />
              <p>Lorem ipsum dolor sit amet, aperiam repellat animi, sed voluptate optio.
              </p>
            </li>

            <li>
              <BsBookmarkStar className='service_listIcons' />
              <p>Lorem ipsum dolor sit aibus praesentium, necessit</p>  
            </li>

            <li>
              <BsBookmarkStar className='service_listIcons' />
              <p>Lorem ipsum dolor sitbus praesentium, necessitat animi, sed voluptate optio.
              </p>
            </li>

            <li>
              <BsBookmarkStar className='service_listIcons' />
              <p>Lorem ipsum dolor sit amet, coaperiam repellat animi, sed voluptate optio.
              </p>
            </li>


            <li>
              <BsBookmarkStar className='service_listIcons' />
              <p>Lorem ipsum dolor sitmporiaperiam repellat animi, sed voluptate optio.
              </p>
            </li>

          </ul>

        </article>

        <article className='service'>
          <div className="service_head">
            <h3>Content Creation</h3>
          </div>

          <ul className="service_list">
            <li>
              <BsBookmarkStar className='service_listIcons' />
              <p>Lorem ipsum dolor sibus prae repellat animi, sed voluptate optio.
              </p>
            </li>

            <li>
              <BsBookmarkStar className='service_listIcons' />
              <p>Lorem ipsum dolor nrepellat animi, sed voluptate optio.
              </p>
            </li>

            <li>
              <BsBookmarkStar className='service_listIcons' />
              <p>Lorem ipsum dolor sit amet,  optio.
              </p>
            </li>

            <li>
              <BsBookmarkStar className='service_listIcons' />
              <p>Lorem ipsum dolor sit ame optio.
              </p>
            </li>

            <li>
              <BsBookmarkStar className='service_listIcons' />
              <p>Lorem ipsum dolor, repudiandae temporoptio.
              </p>
            </li>


            <li>
              <BsBookmarkStar className='service_listIcons' />
              <p>Lorem ipsum dolor sit ametreuptate optio.
              </p>
            </li>

          </ul>

        </article>
      </div>



    </section>
  )
}

export default services