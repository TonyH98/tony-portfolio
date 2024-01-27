import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import {BsGithub} from  "react-icons/bs"
import {BsLinkedin} from  "react-icons/bs"
import { BsFiletypeDoc } from 'react-icons/bs'
import { useState } from 'react';
import "./Contact.css"

function Contact(){

  const [messageStatus, setMessageStatus] = useState(null); 

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();

      let isValid = true;

      emailjs
          .sendForm('service_9mvsfuj', 'template_6qrh90m', form.current, '27wejsS_ngyWquXcw')
          .then(
              (result) => {
                  console.log(result.text);
                  setMessageStatus('Message Sent'); 
              },
              (error) => {
                  console.log(error.text);
                  setMessageStatus('Message Failed'); 
              }
          );

      e.target.reset();
  };



return(

<div id="contact">

<h1>Contact Me</h1>
{messageStatus && <p style={{"color": "green"}}>{messageStatus}</p>}
 <form ref={form} onSubmit={sendEmail} className="contact-form">

    <label className="contact-label" htmlFor="user_name">Name:
    <input className="contact-input" type="text" name="user_name" required />
    </label>

    <label className="contact-label" htmlFor="email">Email:
    <input className="contact-input" type="email" name="user_email" required />
    </label>

    <label className="contact-label" htmlFor="subject">Subject:
    <input className="contact-input" type="text" name="subject" required />
    </label>

    <label className="contact-label" htmlFor="message">Message:
    <textarea className="contact-input" name="message" required></textarea>
    </label>
 
    <div className='button-container'>

    <button className="contact-button" type="submit">Send Message</button>
    </div>
  </form> 

  <div className='social-media-container'>

  <a className="icon hover" href='https://www.linkedin.com/in/tonyqh/' target="_blank">
  <span class="icon-wrapper">
    <BsLinkedin size={30}/>
  </span>
</a>

  <a className="icon hover" href='https://github.com/TonyH98' target="_blank">
  <span class="icon-wrapper">
    <BsGithub size={30}/>
    </span>
    </a>

  <a className="icon hover" href='/Resume.pdf' target="_blank">
  <span class="icon-wrapper">
    <BsFiletypeDoc size={30}/>
    </span>
    </a>


  </div>

</div>


)
    
}



export default Contact