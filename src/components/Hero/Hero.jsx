import React from 'react'
import './Hero.css'
import { BsArrowRight } from "react-icons/bs";
const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>We Ensure better education for a better world</h1>
        <p>Our cutting-edge curriculum is designed to empower students with the knowledge,skills,and experiences needed to excel in the dynamic field of education</p>
        <button className='btn'>Explore more <BsArrowRight className='arrow' size={30}/> </button>
      </div>
    </div>
  )
}

export default Hero