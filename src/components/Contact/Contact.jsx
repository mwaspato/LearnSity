import React from 'react'
import'./Contact.css'
import { MdMessage } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";
import { FaArrowRightLong } from "react-icons/fa6";
const Contact = () => {


    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "d0516281-03cf-4532-9b24-50439d0e7e46");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className='contact'>
      <div className="contact-col">
         <h3>Send us a message <MdMessage  size={30} className='img_icon'/></h3>
         <p>Feel free to reach out through contact form or find our contact 
            information below. Your feedback,questions, and suggestions are 
            important to us as we thrive to provide exceptional service to our  university community</p>
          <ul>
            <li><MdEmail size={20} className='icons'/>Contact@GreatStack.dev</li>
            <li><FaPhone size={20}  className='icons'/>+254 741-543-496</li>
            <li><MdLocationPin size={20} className='icons'/> 77 Massachusetts Ave,Cambridge<br/> MA 02139 United States</li>
          </ul>
      
      </div>
      <div className="contact-col">
         <form onSubmit={onSubmit}>
            <label>Your name</label>
            <input type="text" name='name' placeholder='Enter your name' required />
             <label>Phone Number</label>
             <input type="tel" name='phone' placeholder='Enter your mobile number' required/>
             <label>Write your messages here</label>
             <textarea  name ="message"  rows="6" placeholder='Enter your message'></textarea>
             <button type='submit' className='btn dark-btn'> Submit now <FaArrowRightLong  size={20} className=''/></button>
         </form>
         <span>{result}</span>
       </div>

    </div>
  )
}

export default Contact