import React from "react";
import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";

import { placeData } from "../../Containers/Spots/spotsSlice";
import "./SpotInfo.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row } from "react-bootstrap";

// import Image from "react-bootstrap/Image";

const SpotInfo = () => {
  const selectedSpot = useSelector(placeData);
  const image = selectedSpot.imagepath;
 
  return (
    <Container fluid className="spotInfoDesign">
      <Row  className="row1SpotinfoDesign">
        <Col className=" col1SpotinfoDesign">
          <div style={{backgroundImage: `url(${image})`, backgroundSize: "cover"}} className="imageSpotinfo">
            {/* <img 
            className="" 
            src={image}
            alt="spot capture" /> */}
            
          </div>
          
        </Col>
        <Col className="col2SpotinfoDesign">
            
          <h1 className="">{selectedSpot.spotname.toUpperCase()}</h1>
          <h5 className="">{selectedSpot.city.toUpperCase()}</h5>
          <p className="">{selectedSpot.conditions}</p>
           
          
        </Col>
      </Row>
    </Container>
  );
};

export default SpotInfo;
