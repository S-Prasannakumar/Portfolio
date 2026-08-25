import React from "react";
import "./Project.css";

import project1 from "../../Assest/project1.jpg";
import project2 from "../../Assest/logo1.jpg";
import project3 from "../../Assest/project2.jpg";

function Project() {
  const projects = [
    {
      title: "Student Leave Management System",
      image: project1,
      description:
        "A web application for students to apply leave and staff to approve or reject requests.",
      tools: "React, Bootstrap, Node.js, MySQL",
    },
    {
      title: "Matrix Business",
      image: project2,
      description:
        "A web application for managing business operations and tracking performance metrics.",
      tools: "HTML, CSS, JavaScript",
    },
    {
      title: "Spotify Clone",
      image: project3,
      description:
        "A responsive music player UI inspired by Spotify.",
      tools: "React, Tailwind CSS",
    },
  ];

  return (
    <>
      <span className="tag">Project</span>

        <h2 className='t'>Experience</h2>
          <div class="underline"></div>
    
    <section className="project-section">
   

      <div className="project-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} />

            <div className="project-content">
              <h2 style={{ color: '#b11d1b' }}>{project.title}</h2>

              <p>{project.description}</p>

              <h4>Tools Used</h4>

              <span style={{ color: '#A02422' }}>{project.tools}</span>

              {/* Optional Buttons */}
              
              <div className="project-buttons">
                <button>Live Demo</button>
                <button>GitHub</button>
              </div>
             
            </div>
          </div>
        ))}
      </div>
    </section>
    </>
  );
}

export default Project;