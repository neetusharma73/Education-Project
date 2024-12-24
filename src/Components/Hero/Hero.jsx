/* eslint-disable no-unused-vars */
import React from 'react'
import './Hero.css'
import right_arrow from '../../assets/right arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>We Ensure better education for a better world</h1>
        <p>
        Education is the foundation for personal and societal growth, empowering individuals with knowledge, skills, and critical thinking. It nurtures curiosity, creativity, and lifelong learning, shaping future leaders and innovators.
        </p>
        <button className='btn'> Explore more <img src={right_arrow} alt="right arrow" /></button>
      </div>
    </div>
  )
}

export default Hero
