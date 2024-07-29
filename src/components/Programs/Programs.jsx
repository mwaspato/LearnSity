import React from 'react'
import './Program.css'
import Program1 from '../../assets/Program_1.jpg'
import Program2 from '../../assets/Program_2.jpg'
import Program3 from '../../assets/Program_3.jpg'
import { FcReading } from "react-icons/fc";
import { BiAward } from "react-icons/bi";
import { FaUserGraduate } from "react-icons/fa";

const Programs = () => {
  return (
    <div className='programs'>
       <div className='program'>
         <img src={Program1} alt=""/>
         <div className="caption">
            <FcReading size={70} className='img' />
            <p className='text'>Graduation Degree</p>
         </div>
       </div>
       <div className='program'>
         <img src={Program2} alt=""/>
         <div className="caption">
            < BiAward size={70} className='img' />
            <p className='text'>Masters Degree</p>
         </div>
       </div>
       <div className='program'>
         <img src={Program3} alt=""/>
         <div className="caption">
            <FaUserGraduate size={70} className='img' />
            <p className='text'> Post Graduation</p>
         </div>
       </div>
    </div>
  )
}

export default Programs