import React from 'react';
import './Home.css';
import img from '../../Assest/i5.png';
import { TypeAnimation } from "react-type-animation";

import { GoArrowDown } from "react-icons/go";


import '../Home/Home.css';

export default function Home() {
  return (
    <>
   
   
    <div className='home'>

      <div className="social">

        <div className="social-icons">
          <a href="https://www.linkedin.com/in/prasanna-kumar-72b2b3357?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer">
            <i  style={{color:"#b11d1b"}} className="bi bi-linkedin"></i>
          </a>
        </div>

        <div className="social-icons">
          <a href="https://github.com/S-Prasannakumar" target="_blank" rel="noopener noreferrer">
            <i style={{color:"#b11d1b"}} className="bi bi-github"></i>
          </a>
        </div>

       < div className="social-icons">
          <a href="https://www.instagram.com/prasanna_kumar_1b0a4b1b6/" target="_blank" rel="noopener noreferrer">
            <i style={{color:"#b11d1b"}} className="bi bi-instagram"></i>
          </a>
        </div>

      </div>

    

      <div className="left">
         <h1>
        Hello,
        <span style={{ color: "#b11d1b" }}>
          <TypeAnimation
            sequence={[
              "My name is Prasanna",
              2000,
              "I am a Full Stack Developer",
              2000,
              "I build Modern Web Applications",
              2000,
              "React | Spring Boot | MySQL",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </span>
      </h1>
        <p>I'm a Java Full Stack Developer skilled in Java, Spring Boot, React.js, JavaScript, HTML, CSS, Bootstrap, and MySQL. I build responsive, scalable web applications with clean, efficient code and a focus on user experience. Passionate about continuous learning, I enjoy solving real-world problems through modern web technologies.</p>
        <a href="">Scroll Down<GoArrowDown /></a>
      </div>

      <div className="right">
        <img src={img} alt="Portfolio" />
      </div>
    </div>
     </>
  );}