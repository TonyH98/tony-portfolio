import "./Project.css"

import {BsGithub} from  "react-icons/bs"

function Projects(){

const frontend1 = ["Javascript", "React.js", "HTLM", "CSS", "Tailwind"]
const backend1 = ["Node.js", "SQL", "PostgreSQL", "Express.js"]
const other1 = ["Socket.io", "Google Maps", "Firebase"]


const frontend2 = ["Javascript", "React.js", "HTLM", "CSS"]

const other2 = ["Stripe API"]

return(

    <div className="project-page" id="projects">

        <div>
            <h1 className="header">Personal Projects</h1>
        </div>

    
    <div className="project-holder">

            <div className="project-lists">
            <div className="project-link-image ">

             <img src="/kickit.png" alt="kickit" className="project-images"/>

                <br/>
             <a className="project-links" href="https://kick-it-v1.netlify.app/" target="_blank">Kick.It</a>
             <br/>
            <br/>
             <a className="project-links" href="https://github.com/TonyH98/capstone-project-frontend" target="_blank"><BsGithub size="30px"/></a>
             

            </div>



                <div className="project-container">
                <h2 className="project-header">1. Kick.It</h2>

                <p className="project-descript">
                Kick.it is our collaborative event hosting app, developed as a group project where I led the backend development.

                 Powered by the PERN stack, Kick.it empowers users to create and host events,
                  add comments, invite co-hosts, send friend requests, RSVP, and enjoy real-time messaging with Socket.IO.
                   With a focus on seamless event management, Kick.it demonstrates my backend expertise in a team environment, 
                   showcasing my ability to deliver engaging and feature-rich applications. 
                </p>
                <span style={{"fontWeight": "bold"}}>Front-End Tools:</span>
                   <div className="tools-container">
                    {frontend1.map((front) => {
                    return(
                        <div className="tools" key={front}>
                            {front}
                        </div>
                    )
                   })}

                   </div>
                  
                   <span style={{"fontWeight": "bold"}}>Back-End Tools:</span>
                   <div className="tools-container">
                   {backend1.map((back) => {
                    return(
                        <div className="tools" key={back}>
                            {back}
                        </div>
                    )
                   })}

                   </div>

                   <br/>
                   <span style={{"fontWeight": "bold"}}>Other Tools:</span>
                   <div className="tools-container">
                   {other1.map((other) => {
                    return(
                        <div className="tools" key={other}>
                            {other}
                        </div>
                    )
                   })}

                   </div>
        </div>

            </div>
            
           
            <div className="project-lists">

                    <div className="project-link-image">

                    <img src="/collectionVault.png" width="300" alt="collection" className="project-images"/>

                    <br/>

                    <a className="project-links" href="https://collection-vault.netlify.app/" target="_blank">Collection Vault</a>

                    <br/>
            <br/>
             <a className="project-links" href="https://github.com/TonyH98/e-commerce-frontend" target="_blank"><BsGithub size="30px"/></a>

                    </div>

                <div className="project-container">

                <h2 className="project-header2">2. Collection Vault</h2>
                    <p className="project-descript">
                    Introducing Collection Vault, my solo-developed e-commerce app designed for 
                    seamless mobile shopping experiences. Built using the PERN stack, 
                    Collection Vault offers a diverse range of products, including video games, 
                    comics, and manga. With user registration, cart management, favorites, 
                    search history, purchase tracking, reviews, and secure payments through 
                    the Stripe API, Collection Vault provides a comprehensive shopping solution. 
                    Explore its sleek and user-friendly interface, showcasing my expertise 
                    in full-stack development and creating engaging user experiences. 
                    Collection Vault is a testament to my skills as a software developer, 
                    combining functionality, usability, and a visually appealing design.

                        
                     
                    </p>

                    <span style={{"fontWeight": "bold"}}>Front-End Tools:</span>
                        <div className="tools-container">
                   {frontend2.map((front) => {
                    return(
                        <div className="tools" key={front}>
                            {front}
                        </div>
                    )
                   })}

                   </div>
                        
                    
                        <span style={{"fontWeight": "bold"}}>Back-End Tools:</span>

                        <div className="tools-container">
                   {backend1.map((back) => {
                    return(
                        <div className="tools" key={back}>
                            {back}
                        </div>
                    )
                   })}

                   </div>

                
                   <span style={{"fontWeight": "bold"}}>Other Tools:</span>
                   <div className="tools-container">
                   {other2.map((other) => {
                    return(
                        <div className="tools" key={other}>
                            {other}
                        </div>
                    )
                   })}

                   </div>


                </div>

                
            </div>

    </div>


    </div>

)


}

export default Projects