import React from 'react'
import CV from '../../assets/PauloCV.PDF'

const HBH = () => {
  return (
    <div className="hbh">
        <a href={CV} download  className='btn'>Download CV </a>
        <a href='#contact' className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default HBH