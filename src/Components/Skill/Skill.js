import "./Skill.css"

import { BiLogoJavascript } from "react-icons/bi"
import { FaHtml5 } from "react-icons/fa"
import { SiCss3 } from "react-icons/si"
import { FaReact } from "react-icons/fa"
import { FaNode } from "react-icons/fa"
import { SiExpress } from "react-icons/si"
import { BiLogoPostgresql } from "react-icons/bi"
import { TbSql } from "react-icons/tb"
import { SiVisualstudio } from "react-icons/si"
import { BsGit } from "react-icons/bs"
import { BsGithub } from "react-icons/bs"
import { SiPostman } from "react-icons/si"
import { SiTailwindcss } from "react-icons/si"
import { BsStripe } from "react-icons/bs"
import { SiSocketdotio } from "react-icons/si"
import { SiNpm } from "react-icons/si"
import { TbBrandRedux } from "react-icons/tb"
import { FaPython } from "react-icons/fa"
import { FaJava } from "react-icons/fa"
import {useEffect, useRef} from "react"
function Skill() {


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


  let skills = [
    {
      category: "Front End",
      items: [
        { name: "JavaScript", icon: <BiLogoJavascript size={50} /> },
        { name: "HTML", icon: <FaHtml5 size={50} /> },
        { name: "CSS", icon: <SiCss3 size={50} /> },
        { name: "Tailwind", icon: <SiTailwindcss size={50} /> },
        { name: "React", icon: <FaReact size={50} /> },
        { name: "Redux", icon: <TbBrandRedux size={50} /> }
      ]
    },
    {
      category: "Backend End",
      items: [
        { name: "Java", icon: <FaJava size={50} /> },
        { name: "Node.JS", icon: <FaNode size={50} /> },
        { name: "Express.JS", icon: <SiExpress size={50} /> },
        { name: "PostgreSQL", icon: <BiLogoPostgresql size={50} /> },
        { name: "SQL", icon: <TbSql size={50} /> },
        { name: "Python", icon: <FaPython size={50} /> }
      ]
    },
    {
      category: "Libraries",
      items: [
        { name: "Stripe", icon: <BsStripe size={50} /> },
        { name: "Socket.IO", icon: <SiSocketdotio size={50} /> }
      ]
    },
    {
      category: "Dev Tools",
      items: [
        { name: "Visual Studio Code", icon: <SiVisualstudio size={50} /> },
        { name: "Git", icon: <BsGit size={50} /> },
        { name: "Github", icon: <BsGithub size={50} /> },
        { name: "Postman", icon: <SiPostman size={50} /> },
        { name: "NPM", icon: <SiNpm size={50} /> }
      ]
    }
  ]
  

  return (
    <div id="skills">
   
  <h1>Technical Skills</h1>

  <div className="skills-container">
    {skills.map((sk, index) => (
      <div className="skill hidden-content" key={index} ref = {(el) => (projectRefs.current[index] =el)}>
        <span style={{ fontSize: "20px" }}>{sk.category}</span>
        <div className="skills-icon-container">
          {sk.items.map((item, i) => (
            <div className="skill-icon" key={i}>
              {item.icon}
              <br />
              <span style={{ fontWeight: "bold" }}>{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
</div>

  )
}

export default Skill
