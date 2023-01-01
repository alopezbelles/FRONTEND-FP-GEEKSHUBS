import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import { Col, Container, Row } from "react-bootstrap";
import "./Header2.css";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logoWaves from "../../aessets/logo_waves.png";
import Image from "react-bootstrap/Image";



function Header2() {
  const [collapsed, setCollapsed] = useState(true);

  useEffect(() => {
    const resizeListener = () => {
      if (window.innerWidth > 768) {
        setCollapsed(true);
      }
    };
    window.addEventListener('resize', resizeListener);
    return () => window.removeEventListener('resize', resizeListener);
  }, []);

  return (
    <Nav expand="sm" className="navbar navbar-expand-lg navbar-dark  navBar2">
        <Navbar.Brand href="#home">
        <Image src={logoWaves} className="logoNavbar2"></Image>
        </Navbar.Brand>
      
      <button
        className="navbar-toggler"
        type="button"
        onClick={() => setCollapsed(!collapsed)}
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className={`navbar-collapse ${collapsed ? 'collapse' : ''}`}>
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Contact</a>
          </li>
        </ul>
      </div>
    </Nav>
  );
}

export default Header2