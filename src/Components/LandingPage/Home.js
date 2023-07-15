import './Home.css'
import {BsGithub} from  "react-icons/bs"
import {BsLinkedin} from  "react-icons/bs"

function Home(){


return(
<div className='Home-Page'>

<div className='social-media-icons'>
    <br></br>
    <a href='https://github.com/TonyH98' target="_blank"><BsGithub size="30px"/></a>
    <br/>
    <br/>
    <a href='https://www.linkedin.com/in/tony-hoang-3a4907182/' target="_blank"><BsLinkedin size="30px"/></a>

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
I am always looking for new oppurtunities don't hestitate to reach out!
</div>
<br/>
<div className='contact'>
    Contact Me 
</div>

</div>

</div>
 )
}

export default Home