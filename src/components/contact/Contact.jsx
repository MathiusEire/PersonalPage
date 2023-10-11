import React from 'react'
import './contact.css'
import {AiOutlineMail} from 'react-icons/ai'
import {AiOutlinePhone} from 'react-icons/ai'
import {AiOutlineLinkedin} from 'react-icons/ai'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_7s4la5q', 'template_jfp4a4f', form.current, 'orjLuiq6iZXCUPxAF')
      
  };
  
  
  
  return (
    <section id='contact'> 
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <AiOutlineMail className="contact__option-icon"/>
            <h4>Email</h4>
            <h5>marmstro@tcd.ie</h5>
            <a href="mailto:marmstro@tcd.ie" target="_blank">send me a message</a>
          </article>
          <article className="contact__option">
            <AiOutlinePhone className="contact__option-icon"/>
            <h4>Phone</h4>
            <h5>+447760821887</h5>
            <a>Active from 10am - 5pm GMT</a>
          </article>
          <article className="contact__option">
            <AiOutlineLinkedin className="contact__option-icon"/>
            <h4>Linkedin</h4>
            <h5>Connect with me here</h5>
            <a href="https://www.linkedin.com/in/matthew-armstrong-652035172/" target="_blank">send me a message</a>
          </article>
        </div>
        {/*end of the contact options */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full name pleeeeeease' required/>
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required ></textarea>
          <button type='submit' className='btn btn-primary'>Send</button>
        </form>
      </div>
    
    </section>
  )
}

export default Contact