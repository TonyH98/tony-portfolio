import "./Project.css"


function Projects(){



return(

    <div>

        <div>
            <h1 className="header">Projects</h1>
        </div>

     

            <div className="Kick_It">
                <h2>1. Kick.It</h2>

                <div className="project-container">
                    
                <p className="project-descript">
                Kick.it is our collaborative event hosting app, developed as a group project where I led the backend development.

                 Powered by the PERN stack, Kick.it empowers users to create and host events,
                  add comments, invite co-hosts, send friend requests, RSVP, and enjoy real-time messaging with Socket.IO.
                   With a focus on seamless event management, Kick.it demonstrates my backend expertise in a team environment, 
                   showcasing my ability to deliver engaging and feature-rich applications. 
                   <br/>
                   <br/>
                   Front-End Tools: Javascript, React.js, HTML, CSS, Tailwind
                   <br/>
                   Backend-End Tools: Node.js, SQL, PostSql, Express.js
                </p>
        

            
             <img src="/kickit.png" width="300" alt="kickit" className="project-images"/>

                <br/>
             <a className="project-links" href="https://kick-it-v1.netlify.app/" target="_blank">Kick.It</a>

                
            </div>

            <br/>
            <div className="Collection_Vault">

                <h2>2. Collection Vault</h2>

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

                        <br/>
                        <br/>
                        Front-End Tools: Javascript, React.js, HTML, CSS, Tailwind
                        <br/>
                        Backend-End Tools: Node.js, SQL, PostSql, Express.js
                    </p>

                        <br/>
                    <img src="/collectionVault.png" width="300" alt="collection" className="project-images"/>

                    <br/>

                    <a className="project-links" href="https://collection-vault.netlify.app/" target="_blank">Collection Vault</a>



            </div>

        </div>

    </div>

)


}

export default Projects