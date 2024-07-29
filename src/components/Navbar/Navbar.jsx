import React, { useEffect, useState } from 'react'
import "./Navbar.css"
import Cap from '../../assets/Cap.png'
import { BiMenu } from "react-icons/bi";
const Navbar = () => {
  const[sticky,setSticky] = useState(false);
  
  useEffect(()=>{
     window.addEventListener('scroll',()=>{
         window.scrollY > 50 ? setSticky(true) :setSticky(false);
     })
  },[]);

  const[mobileMenu, setMobileMenu]= useState(false)
   const toggleMenu = ()=>{
    mobileMenu ? setMobileMenu(false) :setMobileMenu(true);
   }

  return (
      <nav className={`container ${sticky? 'dark-nav' :''}`} >
      <div className='left'>
        <img src={Cap} alt='' className='logo' />
        <h1>Edusity</h1>
      </div>
          
      <ul className={mobileMenu ? "" : "hide-mobile-menu"}>
        <li>Home</li>
        <li>Program</li>
        <li>About us</li>
        <li>Campus</li>
        <li>Testimonial</li>
        <li>Contact us</li>
        <li><button className="btn">Contact us</button></li>
      </ul>
      <BiMenu  size={30} className='menu-icon' onClick={toggleMenu}/>
      </nav>
  )
}

export default Navbar