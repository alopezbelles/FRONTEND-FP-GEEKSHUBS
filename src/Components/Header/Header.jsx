import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import logoWaves from "../../aessets/logo_waves.png";



import { useNavigate } from "react-router-dom";
import { useJwt, decodeToken } from "react-jwt";

import "./Header.css";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Header = () => {


  return (
    <>
      <Navbar collapseOnSelect expand="sm" variant="dark" className="navBar">
        <Container>
          <Navbar.Brand href="#home">
          <Image src={logoWaves} className="logoNavbar"></Image>
          </Navbar.Brand>
          {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" /> */}
          <Navbar.Collapse id="responsive-navbar-nav" className="m-auto navBarColl"></Navbar.Collapse>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
           </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
