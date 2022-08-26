
import React from 'react'
import './portfolio.scss'
import project1 from '../../assets/Project1pic.jpg'
import project2 from '../../assets/Wookiee-Warriors.png'
import project3 from '../../assets/samaritan.jpg'

const data = [
  {
    id: 1,
    image: project1,
    title: 'Touch Grass',
    github: 'https://ashley1thompson.github.io/touch-grass-app-national-park-finder/',
    demo: 'https://github.com/Ashley1Thompson/touch-grass-app-national-park-finder'
  },
  {
    id: 2,
    image: project2,
    title: 'Wookies Gold',
    github: 'https://github.com/pcondori1996/WookiesGold',
    demo: 'https://glacial-tor-15581.herokuapp.com/'
  },
  {
    id: 3,
    image: project3,
    title: 'Superhero (in progress)',
    github: 'https://github.com/bentonwashington/superhero-request-service',
    demo: ''
  }
];


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        {
          data.map(({ id, image, title, github, demo }) => {
            return (
              <article key={id} className="portfolio_item">
                <div className="portfolio_itemImage">
                  <img src={image} alt={title} className='actualImage' />
                </div>
                <h3>{title}</h3>
                <div className='portfolio_itemHolder'>
                  <a href={github} targte='_blank' className='btn'>Github Repo</a>
                  <a href={demo} taget='_blank' className='btn'>Demo</a>
                </div>
              </article>
            )
          })
        }





      </div>

    </section>
  )
}

export default Portfolio