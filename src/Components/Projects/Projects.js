import "./Project.css"


function Projects(){


return(

    <div className="project_container">
            
        <div className="project-page" id="projects">
            <h1>Personal Project</h1>
            <div className="project-img">
                <div className="project-container1">
                    <div>
                        <h3 className="project_title">Kick.It</h3>
                        <img src="kickit.png" className="project_images"/>
                        
                    </div>
                    <p className="project_description">
                        Kickit is a comprehensive event management platform, 
                        designed for effortless event planning, hosting, 
                        and participation. With real-time attendee messaging, streamlined registration, attendance tracking, and feedback collection, 
                        Kickit is your go-to solution for successful events.
                </p>
                </div>
                <div className="project-container1">
                    <div>
                        <h3 className="project_title">Collection Vault</h3>
                        <img src="collectionVault.png" className="project_images"/>
                    </div>
                    <p className="project_description">
                    The app specialized in selling books and comics, 
                    users can curate their favorite list, write reviews, 
                    maintain a search history, make secure purchases, and conveniently track their purchase history, creating a seamless
                    and personalized shopping experience for book and comic enthusiasts.
                    </p>
                </div>
                <div className="project-container1">
                    <div>
                        <h3 className="project_title">Hermes</h3>
                        <img src="SocialMedia.png" className="project_images"/>
                    </div>
                    <p className="project_description">
                This project is an emulation of Twitter/X's core functionalities,
                 encompassing user registration, post creation, interactive replies, 
                 user following, mentions, notifications, and post tagging. It aims to provide users with a familiar yet feature-rich social media experience, 
                fostering online connections and content engagement.
                </p>
                </div>
            </div>
        </div>
    </div>

)


}

export default Projects
