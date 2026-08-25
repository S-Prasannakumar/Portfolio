import React from "react";
import "./Header.css";
import Container from "react-bootstrap/Container";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";

import logo from "../Assest/logo.jpeg";

function Header() {
  return (
    <Navbar expand="lg" className="Full-bar" fixed="top">
      <Container>

        {/* Logo */}
        <Navbar.Brand href="#home">
          <img src={logo} alt="Logo" className="logo" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse style={{color: "#000"}} id="basic-navbar-nav">

          <Nav className="ms-auto align-items-center">

            <Nav.Link href="#home">Home</Nav.Link>

            <Nav.Link href="#about">About</Nav.Link>

            <Nav.Link href="#Skills">Skills</Nav.Link>

            <Nav.Link href="#projects">Projects</Nav.Link>

            <Nav.Link href="#certificates">Certificates</Nav.Link>

            <Nav.Link href="#contact">Contact</Nav.Link>

            <Button
  className="but ms-3"
  href="/Prasanna-Resume.pdf"
  download
>
  Download Resume
</Button>

          </Nav>

        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
}

export default Header;