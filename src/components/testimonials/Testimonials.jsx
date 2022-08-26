import React, { useRef, useState } from 'react'

import teagrin from '../../assets/teagrin.jpg'
import cat from '../../assets/cat.jpg'
import nashbi from '../../assets/nashbi.jpg'
import hunter from '../../assets/hunter.jpg'

// import required modules
import { Pagination, Navigation } from "swiper";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import './testimonials.scss'



const data = [
  {

    pic: teagrin,
    name: 'Teagrin Forde',
    Testimonial: 'Paulo is a creative, dynamic web developer and easy to work with. He asks excellent questions that help productivity and efficiency within our group and has a great sense of humor! His application and knowledge of coding languages are positive attributes to contribute to any team.'
  },
  {
    pic: cat,
    name: 'Catalina Cueto',
    Testimonial: 'Paulo is an amazing team player. He plays close attention to detail and has valuable communication skills. His dedication, willingness to help, and vast knowledge will be great assets for any team he works with in the future.'
  },
  {
    pic: nashbi,
    name: 'Nashbi Grand-Jean',
    Testimonial: 'Paulo Condori Pinedo is a dependable teammate you can always count on. He specializes in many languages and can apply difficult concepts in such a seamless way. I would trust him with any contract or task on a team'
  },
  {
    pic: hunter,
    name: 'Huner Padgett',
    Testimonial: 'Ssssaaa Dude'
  }

]

const Testimonals = () => {
  return (
    <section id='testimonals'>
      <h5>Former Teammates</h5>
      <h2>Testimonials</h2>
      


      <Swiper className="container testimonials_container"
      pagination={{
        type: "progressbar",
      }}
  
      modules={[Pagination, Navigation]}
      // className="mySwiper\"
      >
        {
          data.map(({pic, name, Testimonial }, index) => {
            return (
              <SwiperSlide key={index} className='testimonial'>
                <div className='person_avatar'>
                  <img src={pic} alt="Avatar One" />
                </div>
                <h5 className='person_name'>{name}</h5>
                <small className='person_testimonial'>{Testimonial}</small>
              </SwiperSlide>
            )
          })
        }


      </Swiper>
    </section>
  )
}

export default Testimonals