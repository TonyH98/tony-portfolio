import "./Skill.css"

import {BiLogoJavascript} from "react-icons/bi"
import {FaHtml5} from "react-icons/fa"
import {SiCss3} from "react-icons/si"
import {FaReact} from "react-icons/fa"
import {FaNode} from "react-icons/fa"
import {SiExpress} from "react-icons/si"
import {BiLogoPostgresql} from "react-icons/bi"
import {TbSql} from "react-icons/tb"
import {SiVisualstudio} from "react-icons/si"
import {BsGit} from "react-icons/bs"
import {BsGithub} from  "react-icons/bs"
import {SiPostman} from "react-icons/si"
import {SiTailwindcss} from "react-icons/si"
import {BsStripe} from "react-icons/bs"
import {SiSocketdotio} from "react-icons/si"
import {SiNpm} from "react-icons/si"
function Skill(){

return(
    <div id="skills">

    <h1>Technical Skills</h1>


    <div className="skills-container">
    

    <div className="skill">
    <span style={{"fontSize": "20px"}}>Front-End</span>

    <div className="skills-icon-container">
    
    <div className="skill-icon">
    {<BiLogoJavascript size={50}/>} 
    <br/>
    <span style={{"fontWeight": "bold"}}>

    Javascirpt
    </span>
    </div>

    <div className="skill-icon">
    {<FaHtml5 size={50}/>}
    <br/>
    <span style={{"fontWeight": "bold"}}>

    HTML
    </span>
    </div>

    <div className="skill-icon">
     {<SiCss3 size={50}/>}
    <br/>
    <span style={{"fontWeight": "bold"}}>

    CSS
    </span>
    </div>

    <div className="skill-icon">

      {<FaReact size={50}/>}
      <br/>
      <span style={{"fontWeight": "bold"}}>

      React
      </span>
    </div>

    </div>

    </div>


    <div className="skill">
    <span style={{"fontSize": "20px"}}>Back-End: </span>

    <div className="skills-icon-container">

    <div className="skill-icon">
    {<FaNode size={50}/>}
    <br/>
    <span style={{"fontWeight": "bold"}}>

    Node.JS
    </span>
    </div>

    <div className="skill-icon">
     {<SiExpress size={50}/>} 
    <br/>
    <span style={{"fontWeight": "bold"}}>

    Express.JS
    </span>
    </div>

    <div className="skill-icon">
     {<BiLogoPostgresql size={50}/>} 
    <br/>
    <span style={{"fontWeight": "bold"}}>

    PostgreSQL
    </span>
    </div>

    <div className="skill-icon">
     {<TbSql size={50}/>}
    <br/>

    <span style={{"fontWeight": "bold"}}>

    SQL
    </span>
    </div>

    </div>

    </div>




    <div className="skill">
    <span style={{"fontSize": "20px"}}>Libraries: </span>

    <div className="skills-icon-container">

    <div className="skill-icon">
    {<SiTailwindcss size={50}/>}
    <br/>
    <span style={{"fontWeight": "bold"}}>

    Tailwind
    </span>
    </div>
    
    <div className="skill-icon">
     {<BsStripe size={50}/>}
        <br/>
       <span style={{"fontWeight": "bold"}}>Socket.IO</span> 
    </div>

    <div className="skill-icon">
      {<SiSocketdotio size={50}/>}
        <br/>
        <span style={{"fontWeight": "bold"}}>Socket.IO</span>
    </div>

    </div>

    </div>


    <div className="skill">
    <span  style={{"fontSize": "20px"}}>Dev Tool: </span>

    <div className="skills-icon-container">

    <div className="skill-icon">
    {<SiVisualstudio size={50}/>} 
    <br/>
    <span style={{"fontWeight": "bold"}}>

    Visual Stuio Code
    </span>
    </div>

    <div className="skill-icon">
    {<BsGit size={50}/>} 
    <br/>

    <span style={{"fontWeight": "bold"}}>
    Git

    </span>
    </div>

    <div className="skill-icon">
    {<BsGithub size={50}/>} 
    <br/>
    <span style={{"fontWeight": "bold"}}>
    Github

    </span>
    </div>
    
    <div className="skill-icon">
    {<SiPostman size={50}/>} 
    <br/>
    <span style={{"fontWeight": "bold"}}>
    Postman

    </span>
    </div>

    <div className="skill-icon">

    {<SiNpm size={50}/>}
    <br/>

    <span style={{"fontWeight": "bold"}}>
    NPM

    </span>

    </div>
    </div>

    </div>


    </div>

    </div>
)

}

export default Skill