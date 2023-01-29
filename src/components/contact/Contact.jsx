import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';


import './contact.css'
import '../Navbar/Navbar.css'

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_o9ionw5', 'template_r40pt83', form.current, '-KkJV3oOAAECTjp4P')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <div className='contact-form' id='contact'>
        <div className='cf-left'>
            <span>Get In Touch</span>
            <span>Contact Me!</span>
        </div>

        <div className='cf-right'>
        <form className='form' ref={form} onSubmit={sendEmail}>
            <input type='text'  name='Name' placeholder='Name'/>
            <input type='email' name='Email' placeholder='Email'/>
            <textarea placeholder='Message' name='Message' rows={5} cols={2}  />
            <button type='submit' onClick={sendEmail}> Send</button>
            
        </form>
        </div>
    </div>
  )
}

export default Contact;