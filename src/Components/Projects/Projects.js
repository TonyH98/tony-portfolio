import "./Project.css"

import { HiArrowSmallRight } from "react-icons/hi2";
function Projects(){


return(

    <div className="project_container">
            
        <div className="project-page" id="projects">
            <h1>Personal Project</h1>
            <div>Some of my most recent projects with provided github links.</div>
        </div>

        <div className="projects">
            <div className="project">
                <h3>Kick.IT</h3>
                <p className="project_description">
                Kickit is a comprehensive event management platform, 
                designed for effortless event planning, hosting, 
                and participation. With real-time attendee messaging, streamlined registration, attendance tracking, and feedback collection, 
                Kickit is your go-to solution for successful events.
                </p>
                <img src="kickit.png" className="project_images"/>
                <div className="github_links">
                <a href="https://github.com/TonyH98/capstone-project-frontend" target="_blank">
                            <button className="button-link">Frontend Github {<HiArrowSmallRight size={12}/>} </button>
                        </a>
                        <a href="https://github.com/TonyH98/capstone-project-backend" target="_blank">
                            <button className="button-link">Backend Github {<HiArrowSmallRight size={12}/>}</button>
                        </a>
                </div>
            </div>
        </div>
        <div className="projects">
            <div className="project">
                <h3>Collection Vault</h3>
                <p className="project_description">
                The app specialized in selling books and comics, 
                    users can curate their favorite list, write reviews, 
                    maintain a search history, make secure purchases, and conveniently track their purchase history, creating a seamless
                    and personalized shopping experience for book and comic enthusiasts.
                </p>
                <img src="collectionVault.png" className="project_images"/>
                <div className="github_links">
                <a href="https://github.com/TonyH98/capstone-project-frontend" target="_blank">
                            <button className="button-link">Frontend Github {<HiArrowSmallRight size={12}/>} </button>
                        </a>
                        <a href="https://github.com/TonyH98/capstone-project-backend" target="_blank">
                            <button className="button-link">Backend Github {<HiArrowSmallRight size={12}/>}</button>
                        </a>
                </div>
            </div>
        </div>

        <div className="projects">
            <div className="project">
                <h3>Hermes</h3>
                <p className="project_description">
                The app specialized in selling books and comics, 
                    users can curate their favorite list, write reviews, 
                    maintain a search history, make secure purchases, and conveniently track their purchase history, creating a seamless
                    and personalized shopping experience for book and comic enthusiasts.
                </p>
                <img src="SocialMedia.png" className="project_images"/>
                <div className="github_links">
                <a href="https://github.com/TonyH98/capstone-project-frontend" target="_blank">
                            <button className="button-link">Frontend Github {<HiArrowSmallRight size={12}/>} </button>
                        </a>
                        <a href="https://github.com/TonyH98/capstone-project-backend" target="_blank">
                            <button className="button-link">Backend Github {<HiArrowSmallRight size={12}/>}</button>
                        </a>
                </div>
            </div>
        </div>
    </div>


)


}

export default Projects


{/* <p className="project_description">
Kickit is a comprehensive event management platform, 
designed for effortless event planning, hosting, 
and participation. With real-time attendee messaging, streamlined registration, attendance tracking, and feedback collection, 
Kickit is your go-to solution for successful events.
</p> */}


{/* <p className="project_description">
                    The app specialized in selling books and comics, 
                    users can curate their favorite list, write reviews, 
                    maintain a search history, make secure purchases, and conveniently track their purchase history, creating a seamless
                    and personalized shopping experience for book and comic enthusiasts.
                    </p> */}




                    // <p className="project_description">
                    // The app specialized in selling books and comics, 
                    // users can curate their favorite list, write reviews, 
                    // maintain a search history, make secure purchases, and conveniently track their purchase history, creating a seamless
                    // and personalized shopping experience for book and comic enthusiasts.
                    // </p>

                    // <img src="collectionVault.png" className="project_images"/>

                    // <img src="SocialMedia.png" className="project_images"/>