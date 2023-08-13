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
        <div class="project-content">
        <p>
            Introducing kickit: your all-in-one event solution. 
            Plan, host, and join events effortlessly. Enjoy real-time attendee messaging for
            seamless communication. Kickit streamlines registration, tracks attendance,
             and gathers feedback for event success. Elevate your events with Kickit today.
        </p>
    </div>
        <button className="button-link">Github</button>
        </div>


        <div className="project">
    <h2>2. Collection Vault</h2>
    <img src="./collectionVault.png" alt="collectionValut" className="project-img"/>
    <div class="project-content">
        <p>
            The app specialized in selling books and comics, users can curate their favorite list, write reviews, 
            maintain a search history, make secure purchases, and conveniently track their purchase history, creating a 
            seamless and personalized shopping experience for book and comic enthusiasts.
        </p>
    </div>
        <button className="button-link">Github</button>
</div>

    </div>

    </div>

)


}

export default Projects
