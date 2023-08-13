import "./Project.css"


function Projects(){


return(

    <div className="project-page" id="projects">

        <div>
            <h1 className="header">Personal Projects</h1>
        </div>

    <div className="projects-container">

        <div className="project">

        <h2>1. Kick.It</h2>
        <img src="./kickit.png" alt="kickit" className="project-img"/>
        <button className="button-link">Github</button>
        </div>


        <div className="project">
        <h2>2. Collection Vault</h2>
        <img src="./collectionVault.png" alt="collectionValut" className="project-img"/>

        <button className="button-link" >Github</button>

        </div>

    </div>

    </div>

)


}

export default Projects
