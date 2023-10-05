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
        Kickit is a comprehensive event management platform, designed for effortless event planning, hosting, and participation. With real-time attendee messaging, streamlined registration, attendance tracking, and feedback collection, Kickit is your go-to solution for successful events.
        </p>
    </div>
    <a href="https://github.com/TonyH98/e-commerce-frontend" target="_blank">
        <button className="button-link">Frontend Github</button>

    </a>
    <a href="https://github.com/TonyH98/capstone-project-backend" target="_blank">
        <button className="button-link"> Backend Github</button>

    </a>

    <a href="https://www.youtube.com/watch?v=m-fOIljrsj4&t=1940s" target="_blank">
        <button className="button-link">Youtube</button>
    </a>
        <span>Go to 32:00</span>
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
    <a href="https://github.com/TonyH98/capstone-project-frontend" target="_blank">
        <button className="button-link">Frontend Github</button>

    </a>
    <a href="https://github.com/TonyH98/e-commerce-backend" target="_blank">
        <button className="button-link">Backend Github</button>

    </a>
    <a href="https://collection-vault.netlify.app/" target="_blank">
        <button className="button-link">Live Link</button>

    </a>
</div>

<div className="project">

<h2>3. Hermes</h2>
<img src="./SocialMedia.png" alt="SocialMedia" className="project-img"/>
<div class="project-content">
<p>
This project is an emulation of Twitter/X's core functionalities, encompassing user registration, post creation, interactive replies, user following, mentions, notifications, and post tagging. It aims to provide users with a familiar yet feature-rich social media experience, fostering online connections and content engagement.
</p>
</div>
<a href="https://github.com/TonyH98/social-media-frontend" target="_blank">
<button className="button-link">Frontend Github</button>

</a>
<a href="https://github.com/TonyH98/social-media-backend" target="_blank">
<button className="button-link">Backend Github</button>

</a>
</div>
    </div>

    </div>

)


}

export default Projects
