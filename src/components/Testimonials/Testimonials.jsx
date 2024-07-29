import React, { useRef } from 'react'
import "./Testimonials.css"
import user_1 from '../../assets/user_1.jpg'
import user_2 from '../../assets/user_3.jpg'
import user_3 from '../../assets/user_2.jpg'
import user_4 from '../../assets/user_4.jpg'
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";
const Testimonials = () => {
    const slider = useRef();
    let tx = 0;
   const slideForward = () =>{

    if(tx > -50){
        tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`
      
  }
 
   const slideBackward =() =>{
        if(tx < 0){
            tx += 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`
   }
  return (
    <div className='testimonials'>
        <FaArrowAltCircleLeft className='next-btn' size={70} onClick={slideForward}/>
        <FaArrowAltCircleRight className='back-btn' size={70} onClick={slideBackward}/>
        <div className='slider '>
              <ul ref={slider}>
                <li>
                      <div className='slide'>
                          <div className="user-info">
                              <img src={user_1} alt="" />
                              <div>
                                  <h3>William Jackson</h3>
                                  <span>Edusity,USA</span>
                              </div>
                           </div>
                              <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made.
                                  The supportive community,state-of-the-art facilities,and commitment to academic excellence
                                  have truly exceeded my expectations.</p>     
                      </div> 
                </li>
                <li>
                      <div className='slide'>
                          <div className="user-info">
                              <img src={user_2} alt="" />
                              <div>
                                  <h3>William Jackson</h3>
                                  <span>Edusity,USA</span>
                              </div>
                           </div>
                              <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made.
                                  The supportive community,state-of-the-art facilities,and commitment to academic excellence
                                  have truly exceeded my expectations.</p>     
                      </div> 
                </li>
                <li>
                      <div className='slide'>
                          <div className="user-info">
                              <img src={user_3} alt="" />
                              <div>
                                  <h3>William Jackson</h3>
                                  <span>Edusity,USA</span>
                              </div>
                           </div>
                              <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made.
                                  The supportive community,state-of-the-art facilities,and commitment to academic excellence
                                  have truly exceeded my expectations.</p>     
                      </div> 
                </li>
                <li>
                      <div className='slide'>
                          <div className="user-info">
                              <img src={user_4} alt="" />
                              <div>
                                  <h3>William Jackson</h3>
                                  <span>Edusity,USA</span>
                              </div>
                           </div>
                              <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made.
                                  The supportive community,state-of-the-art facilities,and commitment to academic excellence
                                  have truly exceeded my expectations.</p>     
                      </div> 
                </li>
                
              </ul>
        </div>
        
    </div>
  )
}

export default Testimonials