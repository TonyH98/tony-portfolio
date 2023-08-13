import { Link } from "react-router-dom"
import './Nav.css'


function Nav(){

return(
    <nav className="nav-section">

        <div className="nav-container">
            
        <div>
        
        <div className="my-name">
        <p><a href="#Home">Tony Hoang</a></p>
        </div>
     

        </div>

        <div className="sections">
        
      
        
    <p><a href="#projects">Projects</a></p>

    <p><a href="#skills">Skills</a></p>

    <p><a href="#contact">Contact</a></p>


    
        </div>

        </div>
    </nav>
)

}

export default Nav