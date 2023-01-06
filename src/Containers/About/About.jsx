import React from "react";
import "./About.css";


import { Col, Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";



const About = () => {

    return (
        
        <Container className="container-fluid aboutDesign d-flex flex-column align-content-center justify-content-center">

            <Row className="row1Design d-flex align-content-center justify-content-center">
                <Col className="col1Design">About Waves.
                </Col>
                {/* <Col className="col2Design">Discover the favorite spots for surfers 
                </Col> */}
            </Row>

        <Container className="container-fluid cont2Design">
            Container2
        </Container>



        </Container>
    )


}

export default About;