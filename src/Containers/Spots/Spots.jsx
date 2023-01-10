
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Spots.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import { useNavigate } from "react-router-dom";
// import { errorCheck } from "../../services/usefull";
// import axios from "axios";
// import { useJwt } from "react-jwt";

import Image from "react-bootstrap/Image";
import logoWaves from "../../aessets/logo_waves.png";
import { Col, Container, Row } from "react-bootstrap";


const Spots = () => {
    return(
        <Container fluid className=" spotsDesign">
            <Row className="row1Spots d-flex flex-column align-items-center justify-content-center">
                <Col className="titleSpots">SPOTS</Col>
                <Col className="descriptionTitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Col>
            </Row>



        </Container>
    )
}

export default Spots;