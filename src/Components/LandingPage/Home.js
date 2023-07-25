import './Home.css'
import {BsGithub} from  "react-icons/bs"
import {BsLinkedin} from  "react-icons/bs"
import { BsFiletypeDoc } from 'react-icons/bs'
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
function Home(){

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_9mvsfuj', 'template_6qrh90m', form.current, '27wejsS_ngyWquXcw')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

        e.target.reset()
    };




return(
<div className='Home-Page'>

<div className='social-media-icons'>

    

    <a href='https://github.com/TonyH98' target="_blank"><BsGithub size="30px"/></a>
   
   
    <a href='https://www.linkedin.com/in/tony-hoang-3a4907182/' target="_blank"><BsLinkedin size="30px"/></a>

    <a href="/Resume.pdf" target="_blank"><BsFiletypeDoc size="30px"/></a>


</div>

<div className='home-container'>

<div className='introduction-container'>
    <h1 className='hello'>Hello, I'M Tony Hoang</h1>
    <h2 className='title'>A Full-Stack Developer</h2>
    <p className='introduction'>
  <span>Welcome to my portfolio site!</span> 
  <span> I am a passionate full-stack developer specializing in the PERN stack,</span> 
  <span> where I create dynamic and innovative web applications</span> 
  <span> to bring ideas to life.</span>
</p>


</div>

  <form ref={form} onSubmit={sendEmail} className="contact-form">
<p className='contact-message'>
I am always looking for new opportunities, so don't hesitate to reach out!
</p>

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

</div>




</div>
 )
}

export default Home