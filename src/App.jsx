import React from 'react';
// import Home from './Pages/Home';
import Skill from './Pages/Skill/Skill';
import Header from './Component/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Project from './Pages/Project/Project';
import Home from './Pages/Home/Home';
import { BrowserRouter as Router } from 'react-router-dom';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import { Route } from 'react-router-dom';
import ChatWindow from './Component/Ai/ChatWindow';
import Certificates from './Pages/cetificate/Certificates'
import Footer from './Pages/Footer/Footer';
// import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <>
  
    <Header/>
    <section id="home">
      <Home/>
    </section>
    <section id="about">
      <About/>
    </section>
    <section id="skills">
      <Skill/>
    </section>
    <section id="projects">
      <Project/>
    </section>
    <section id="certificates">
      <Certificates/>
    </section>
    <section id="contact">
      <Contact/>
    </section>
    <ChatWindow/>
    <Footer/>
    </>
  );
}

export default App;
