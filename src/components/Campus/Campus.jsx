import React from 'react';
import './Campus.css';
import gallery_1 from '../../assets/gallery_1.jpg'
import gallery_2 from '../../assets/gallery_2.jpg'
import gallery_3 from '../../assets/gallery_3.jpg'
import gallery_5 from '../../assets/gallery_5.jpg'
const Campus = () => {
  return (
    <div className='campus'>
        <div className="gallery">
            <img src={gallery_1} alt=""/>
            <img src={gallery_2} alt=""/>
            <img src={gallery_3} alt=""/>
            <img src={gallery_5} alt=""/>
        </div>  
        <button className='btn dark-btn'>See more here</button>
    </div>
  )
}

export default Campus