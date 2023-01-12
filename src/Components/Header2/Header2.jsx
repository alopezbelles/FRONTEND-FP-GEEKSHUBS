import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useJwt } from "react-jwt";

import "bootstrap/dist/css/bootstrap.min.css";
// import { Col, Container, Row } from "react-bootstrap";
import "./Header2.css";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logoWaves from "../../aessets/logo_waves.png";
import Image from "react-bootstrap/Image";

function Header2() {
  const [collapsed, setCollapsed] = useState(true);
  const navigate = useNavigate();
  const token = localStorage.getItem("jwt");
  let {decodedToken} = useJwt(token);
  if (decodedToken === null) {
    decodedToken = { name: "" };
  }

  const logout = () => {
    localStorage.removeItem("jwt");
    navigate("/");
  };
  useEffect(() => {
    const resizeListener = () => {
      if (window.innerWidth > 768) {
        setCollapsed(true);
      }
    };
    window.addEventListener("resize", resizeListener);
    return () => window.removeEventListener("resize", resizeListener);
  }, []);

  if (token) {
    return (
      <Nav expand="sm" className="navbar navbar-expand-lg navbar-dark  navBar2">
        <Navbar.Brand onClick={() => navigate("/")}>
          <Image src={logoWaves} className="logoNavbar2"></Image>
        </Navbar.Brand>

        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setCollapsed(!collapsed)}
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className={`navbar-collapse ${collapsed ? "collapse" : ""}`}>
          <ul className="navbar-nav mr-auto hover">
            <li className="nav-item active">
              <a
                onClick={() => navigate("/spots")}
                className="nav-link mx-auto mt-1 mb-md-1 text-center"
              >
                Spots
              </a>
            </li>
            <li className="nav-item active">
              <a
                onClick={() => navigate("/about")}
                className="nav-link mx-auto mt-1 mb-md-1 text-center"
              >
                About
              </a>
            </li>
          </ul>
          <ul className="navbar-nav mr-auto  linksRight hover">
            <li className="nav-item active">
              <a
                onClick={() => navigate("/profile")}
                className="nav-link mx-auto mt-1 mb-md-1 text-center"
              >
                Welcome, {decodedToken.name}!
              </a>
            </li>
            <li className="nav-item active">
              <a
                onClick={() => logout()}
                className="nav-link mx-auto mt-1 mb-md-1 text-center"
              >
                Logout
              </a>
            </li>
            
          </ul>
        </div>
      </Nav>
    );
  } else {
    return (
    <Nav expand="sm" className="navbar navbar-expand-lg navbar-dark  navBar2">
      <Navbar.Brand onClick={() => navigate("/")}>
        <Image src={logoWaves} className="logoNavbar2"></Image>
      </Navbar.Brand>

      <button
        className="navbar-toggler"
        type="button"
        onClick={() => setCollapsed(!collapsed)}
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className={`navbar-collapse ${collapsed ? "collapse" : ""}`}>
        <ul className="navbar-nav mr-auto hover">
          <li className="nav-item active">
            <a
              onClick={() => navigate("/spots")}
              className="nav-link mx-auto mt-1 mb-md-1 text-center"
            >
              Spots
            </a>
          </li>
          <li className="nav-item active">
            <a
              onClick={() => navigate("/about")}
              className="nav-link mx-auto mt-1 mb-md-1 text-center"
            >
              About
            </a>
          </li>
        </ul>
        <ul className="navbar-nav mr-auto  linksRight hover">
          <li className="nav-item active">
            <a
              onClick={() => navigate("/login")}
              className="nav-link mx-auto mt-1 mb-md-1 text-center"
            >
              Login
            </a>
          </li>
          <li className="nav-item active">
            <a
              onClick={() => navigate("/")}
              className="nav-link mx-auto mt-1 mb-md-1 text-center"
            >
              Register
            </a>
          </li>
        </ul>
      </div>
    </Nav>
    );
  }
}

export default Header2;
