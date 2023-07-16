import "./About.css"

import {BsGithub} from  "react-icons/bs"
import {BsLinkedin} from  "react-icons/bs"
import { BsFiletypeDoc } from 'react-icons/bs'


function About(){

const technicalSkills = ["Javascript", "HTML", "CSS", "React.js", "Node.js",
"PostgreSQL", "SQL", "Express.js", "Rest API", "Git"]

const hobbies = ["Video Games", "Anime", "Manga", "Comics", "Sci-Fi Books", "Running"]


return(
    <div className="About">

        <h1>About Me</h1>

        <div className="About-Section">

        <div className="profile-container">
            <img src="/profile.jpeg" alt="profile" className="profile-picture"></img>
        </div>

        <div className="bio-container">

        <div>
        Lorem ipsum dolor sit amet, 
        consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et 
        dolore magna aliqua. Ut enim ad minim veniam, 
        quis nostrud exercitation ullamco laboris nisi ut 
        aliquip ex ea commodo consequat. Duis aute irure dolor
         in reprehenderit in voluptate velit esse 
         cillum dolore eu fugiat nulla pariatur. 
         Excepteur sint occaecat cupidatat non proident, 
         sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        
        <br/>       
        <br></br>
        <span style={{"fontWeight": "bold"}}> Technical Skills:</span>
                        <div className="tools-container">
                   {technicalSkills.map((tech) => {
                    return(
                        <div className="tools" key={tech}>
                            {tech}
                        </div>
                    )
                   })}

                   </div>

        <br/>

        <span style={{"fontWeight": "bold"}}> Interests/Hobbies: </span>
                        <div className="interests-container">
                   {hobbies.map((hobby) => {
                    return(
                        <div className="hobby" key={hobby}>
                            {hobby}
                        </div>
                    )
                   })}

                   </div>
        
        <br/>

        <span style={{"fontWeight": "bold"}}> Links: </span>

        <div className="some-links">
       
    <a href='https://github.com/TonyH98' target="_blank"><BsGithub size="30px"/></a>
  
    <a href='https://www.linkedin.com/in/tony-hoang-3a4907182/' target="_blank"><BsLinkedin size="30px"/></a>

    <a href="/Resume.pdf" target="_blank"><BsFiletypeDoc size="30px"/></a>
        </div>
        

        </div>


        </div>


        </div>


    </div>
)

}

export default About