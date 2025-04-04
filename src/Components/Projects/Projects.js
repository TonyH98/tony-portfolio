import "./Project.css"

import { HiArrowSmallRight } from "react-icons/hi2";

import {useEffect , useRef} from 'react'
function Projects(){

    const projectRefs = useRef([]); // Store references to project elements

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("active");
                } else {
                    entry.target.classList.remove("active"); // Optional if you want elements to disappear when scrolling up
                }
            });
        }, { threshold: 0.2 }); // Adjust threshold to control when the effect triggers

        projectRefs.current.forEach((el) => {
            if (el) observer.observe(el);
        });

        return () => {
            projectRefs.current.forEach((el) => {
                if (el) observer.unobserve(el);
            });
        };
    }, []);

    return (
        <div className="project_container">
            <div className="project-page" id="projects">
                <h1>Personal Projects</h1>
                <div>Some of my most recent projects with provided GitHub links.</div>
            </div>

            {[
                {
                    title: "Kick.IT",
                    description: "Kickit is a comprehensive event management platform...",
                    img: "kickit.png",
                    frontend: "https://github.com/TonyH98/capstone-project-frontend",
                    backend: "https://github.com/TonyH98/capstone-project-backend",
                },
                {
                    title: "Collection Vault",
                    description: "The app specializes in selling books and comics...",
                    img: "collectionVault.png",
                    frontend: "https://github.com/TonyH98/capstone-project-frontend",
                    backend: "https://github.com/TonyH98/capstone-project-backend",
                },
                {
                    title: "Hermes",
                    description: "A social media platform...",
                    img: "SocialMedia.png",
                    frontend: "https://github.com/TonyH98/capstone-project-frontend",
                    backend: "https://github.com/TonyH98/capstone-project-backend",
                },
            ].map((project, index) => (
                <div
                    key={index}
                    className="projects hidden-content"
                    ref={(el) => (projectRefs.current[index] = el)}
                >
                    <div className="project">
                        <h3>{project.title}</h3>
                        <p className="project_description">{project.description}</p>
                        <img src={project.img} className="project_images" alt={project.title} />
                        <div className="github_links">
                            <a href={project.frontend} target="_blank" rel="noopener noreferrer">
                                <button className="button-link">
                                    Frontend GitHub <HiArrowSmallRight size={12} />
                                </button>
                            </a>
                            <a href={project.backend} target="_blank" rel="noopener noreferrer">
                                <button className="button-link">
                                    Backend GitHub <HiArrowSmallRight size={12} />
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );


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