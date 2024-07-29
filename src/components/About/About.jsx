import React from 'react'
import './About.css'
import about_img from '../../assets/about.jpg'
import { FaPlay } from "react-icons/fa";
const About = ({setPlayState}) => {
  return (
    <div className='about'>
       <div className="about-left">
          <img src={about_img} alt='' className='about_img'/>
          <div>
             <FaPlay onClick={()=>{setPlayState(true)}} className='play-icon' size={40}/>
          </div>
         
       </div>
       <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tomorrow's Leaders Today</h2>
        <p>Embark on a transformative educational journey with our univesity's comprehensive education programs.Our cutting-edge curriculum is designed to empower students with the knowledge, skills,and experiences needed to excel in the dynamic field of education</p>
        <p>With a focus on innovation, handspon-learning, and personalized mentorship, our programs prepare aspring educators to makre a meaningful impact in classrooms,schools,and communities.</p>
        <p>Whether you inspire to become a teacher,
             administrator, counselor, or educational leader ,our  diverse range of programs offers the perfect path to achiev your gools and unblock your full potential in shaping the future of education</p>
       </div>
    </div>
  )
}

export default About