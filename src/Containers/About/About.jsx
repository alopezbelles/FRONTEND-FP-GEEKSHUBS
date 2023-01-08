import React from "react";
import "./About.css";

import { Col, Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "react-bootstrap/Image";
import icon1 from "../../aessets/icon1.png";
import icon2 from "../../aessets/icon2.png";
import icon3 from "../../aessets/icon3.png";
import icon4 from "../../aessets/icon4.png";

const About = () => {
  return (
    <Container className="aboutDesign d-flex flex-column align-content-center justify-content-center">
      <Row className="row1Design d-flex align-content-center justify-content-center">
        <Col className="col1Design">About Waves.</Col>
      </Row>

      <Row className="container-fluid row2Design justify-content-evenly">
        {/* <Col className="infoBox">Col
            </Col> */}
        <div className="infoBox">
          <Image className="iconDesign" src={icon1}></Image>
        </div>
        <div className="infoBox ">
          <Image className="iconDesign" src={icon2}></Image>
        </div>
        <div className="infoBox">
          <Image className="iconDesign" src={icon3}></Image>
        </div>
        <div className="infoBox">
          <Image className="iconDesign" src={icon4}></Image>
        </div>
        {/* <div className="infoBox">hola</div> */}
      </Row>

      <Row className="row3Design d-flex align-content-center justify-content-center">
        <div className="descriptionBox">
        Waves is an application where you will find the best locations for surfing. In addition, in each spot you will find relevant information such as weather information, type of beach, type of waves, access and the existence of lifeguards or first aid stations.  
        </div>
      </Row>
    </Container>
  );
};

export default About;
