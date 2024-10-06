import React from 'react'
import './contact.css'
import {MdOutlineEmail}  from 'react-icons/md' 
import {BsInstagram} from 'react-icons/bs'

import { useRef } from 'react';
import emailjs from 'emailjs-com';
const Contact = () => {
  const form=useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_i601d7d', 'template_phex68v', form.current, 'f5u8zbSc1dpkvNYIQ')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
        
          console.log(error.text);
      });
      e.target.reset()

    console.log(e);
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact_container">
        <div className="contact_options">
          <article className='contact_option'>
          <MdOutlineEmail className='contact_option-icon'/>
           <h4>Email</h4>
           <h5>krishnanandtutu@gmail.com</h5>
            <a href="mailto:krishnanandtutu@gmail.com" target='__blank'>Send a message</a>
          </article>
          <article className='contact_option'>
          <BsInstagram className='contact_option-icon'/>
           <h4>Instgram</h4>
           <h5>Krishna Nand Tutu</h5>
            <a href="https://www.instagram.com/shandilya.singh.krishna/" target='__blank'>Send a message</a>
          </article>
          
        </div>
        {/**End of Contact option**/}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="user_name" placeholder='Your Full Name' required/>
          <input type="email" name="user_email" placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type="submit" className='btn btn-primary'>Send Message</button>
        </form>
        </div>
    </section>
  )
  }

export default Contact