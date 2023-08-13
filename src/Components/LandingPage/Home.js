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
<div className='Home-Page' id="Home">


<div className='home-container'>

<div className='introduction-container'>
    <h1 className='hello'>Hello, I'M Tony Hoang</h1>
    <h2 className='title'>A Full-Stack Developer</h2>
    <p className='about-me'>
    I am a skilled full-stack developer proficient in crafting dynamic web applications. With a passion for innovative 
    solutions,
    <br/> 
    I am actively seeking opportunities to contribute my expertise and collaborate on exciting projects.
    </p>

    <p className='about-me'>When not immersed in the world of technology,
         I actively pursue my hobbies, maintaining an active running routine 
         <br/>
         and 
      staying engrossed in the captivating narratives of Image Comic Books and manga.</p>
</div>

</div>


<div className='profile-container'>

<img src="/profile.jpeg" alt="profile" className="profile-picture"></img>
</div>

</div>
 )
}

export default Home