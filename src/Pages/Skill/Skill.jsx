import React from "react";
import "./Skill.css";

function Skill() {
   const skills = [
    "bi bi-filetype-html",
    "bi bi-filetype-css",
    "bi bi-filetype-js",
    "bi bi-bootstrap",
    "bi bi-filetype-java",
    "bi bi-database-fill",
    "bi bi-git",
    "bi bi-github",
  ];
  return (
    
    <>

      <span className="tag">Skills</span>

        <h2 className='t'>Skill Set</h2>
          <div class="underline"></div>

      <div className="marquee">

        <div className="marquee-content">

          {skills.map((icon, index) => (
            <i key={index} className={icon}></i>
          ))}

          {/* Duplicate for Infinite Loop */}

          {skills.map((icon, index) => (
            <i key={index + 100} className={icon}></i>
          ))}

        </div>

      </div>


      <div className="skills-container">

        <div className="skill-card">
          <i className="bi bi-window"></i>
          <h2 style={{ color: '#b11d1b' }}>Frontend</h2>

          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React JS</li>
          </ul>
        </div>

        <div className="skill-card">
          <i className="bi bi-server"></i>
          <h2 style={{ color: '#b11d1b' }}>Backend</h2>

          <ul>
            <li>Core Java</li>
            <li>Spring</li>
            <li>Spring Boot</li>
            <li>MySQL</li>
          </ul>
        </div>

        <div className="skill-card">
          <i className="bi bi-code-slash"></i>
          <h2 style={{ color: '#b11d1b' }}>Programming</h2>

          <ul>
            <li>C</li>
            <li>Java</li>
            <li>Python</li>
            <li>JavaScript</li>
          </ul>
        </div>
 <div class="marquee">

    <div class="marquee-content">

       
        <i class="bi bi-filetype-html"></i>
        <i class="bi bi-filetype-css"></i>
        <i class="bi bi-filetype-js"></i>
        <i class="bi bi-bootstrap"></i>
         <i class="bi bi-bootstrap"></i>
        <i class="bi bi-filetype-java"></i>
        <i class="bi bi-database-fill"></i>
        <i class="bi bi-github"></i>
        <i class="bi bi-filetype-java"></i>
        <i class="bi bi-database-fill"></i>
        <i class="bi bi-github"></i>

        
        <i class="bi bi-filetype-html"></i>
        <i class="bi bi-filetype-css"></i>
        <i class="bi bi-filetype-js"></i>
        <i class="bi bi-bootstrap"></i>
        <i class="bi bi-filetype-java"></i>
        <i class="bi bi-database-fill"></i>
        <i class="bi bi-github"></i>

    </div>

</div>


      </div>
    </>
  );
}

export default Skill;