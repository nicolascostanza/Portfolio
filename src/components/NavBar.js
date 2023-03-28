import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import { BrowserRouter as Router } from "react-router-dom";
import "./navBar.css";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container className="NavBarMobile">
          <Navbar.Brand href="#home">
            <span className="logo">Nicolas Costanza</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link
                href="#home"
                className={
                  activeLink === "home" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("home")}
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="#tools"
                className={
                  activeLink === "tools" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("tools")}
              >
                Technologies
              </Nav.Link>
              <Nav.Link
                href="#tests"
                className={
                  activeLink === "tests" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("tests")}
              >
                Projects
              </Nav.Link>
              <Nav.Link
                href="#connect"
                className={
                  activeLink === "tests" ? "active navbar-link" : "navbar-link"
                }
              >
                Contact Me
              </Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a
                  href="https://www.linkedin.com/in/nicolascostanza/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={navIcon1} alt="" />
                </a>
              </div>
              <a
                href="https://drive.google.com/file/d/1wTwY1SP6I41P4xSDCinqh_753Wp1zKQn/view"
                target="_blank"
                rel="noreferrer"
              >
                <button className="vvd getCV">
                  <span>Get CV</span>
                </button>
              </a>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  );
};
