import { Link } from "react-router-dom"
import './Nav.css'


function Nav(){

return(
    <nav className="nav-section">

        <div className="nav-container">
            
        <div>
        <Link to="/">
        <div className="my-name">
            Tony Hoang
        </div>
        </Link>

        </div>

        <div className="sections">
        
        <Link to="/projects">
        <div>
            Projects
        </div>
        </Link>

        <Link to="/About">
        <div>
            About Me
        </div>
        
        </Link>
        </div>

        </div>
    </nav>
)

}

export default Nav