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
    <br></br>
    <a href='https://github.com/TonyH98' target="_blank"><BsGithub size="30px"/></a>
    <br/>
    <br/>
    <a href='https://www.linkedin.com/in/tony-hoang-3a4907182/' target="_blank"><BsLinkedin size="30px"/></a>

    <br></br>
    <br/> 

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

<div className='contact-message'>
I am always looking for new opportunities, so don't hesitate to reach out!
</div>

<div class="container">
  <form ref={form} onSubmit={sendEmail} className="contact-form">
    <label className="contact-label" htmlFor="user_name">Name</label>
    <input className="contact-input" type="text" name="user_name" required />
    <br/>
    <label className="contact-label" htmlFor="email">Email</label>
    <input className="contact-input" type="email" name="user_email" required />
    <br/>
    <label className="contact-label" htmlFor="subject">Subject</label>
    <input className="contact-input" type="text" name="subject" required />
    <br/>
    <label className="contact-label" htmlFor="message">Message</label>
    <textarea className="contact-input" name="message" required></textarea>
    <br/>
    <br/>
    <button className="contact-button" type="submit">Send Message</button>
  </form>
</div>
</div>




</div>
 )
}

export default Home