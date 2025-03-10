import './Home.css'
function Home(){

  




return(
<div className='Home-Page' id="Home">


<div className='home-container'>

<div className='introduction-container'>
    <h1 className='hello'>Hello, I'm Tony Hoang</h1>
    <h2 className='title'>A Full-Stack Developer</h2>
    <p className='about-me'>
    I am a skilled full-stack developer proficient in crafting dynamic web applications. With a passion for innovative solutions,

    I am actively seeking opportunities to contribute my expertise and collaborate on exciting projects.
    </p>

    <p className='about-me'>When not immersed in the world of technology,
         I actively pursue my hobbies, maintaining an active running routine 
         and 
      staying engrossed in the captivating narratives of comic books and mangas.</p>
</div>

</div>


<div className='profile-container'>

<img src="/profile.jpeg" alt="profile" className="profile-picture"></img>
</div>

</div>
 )
}

export default Home