
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
                <Col className="descriptionTitle">Access the following spots to discover the best places to surf safely. Know the conditions of each beach as well as its safety level and which are the best seasons for surfing. Take advantage of the experiences of other users and discover which are the best beaches around you to practice sport in an environment tested for it.  </Col>
            </Row>
            <Row className="row2Spots"> Hola soy row2
                <div className=""></div>


            </Row>


        </Container>
    )
}

export default Spots;