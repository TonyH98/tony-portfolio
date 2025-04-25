import { Link } from "react-router-dom"
import './Nav.css'


function Nav(){

return(
    <nav className="nav-section">

        <div className="nav-container">
            
        <div>
        
        <div className="my-name">
        <p><a href="#Home" className="hover">Tony Hoang</a></p>
        </div>
     

        </div>

        <div className="sections">
        
      
        
    <a href="#projects" className="hover">Projects</a>

    <a href="#skills" className="hover">Skills</a>

    <a href="#contact" className="hover">Contact</a>
        </div>

        </div>
    </nav>
)

}

export default Nav