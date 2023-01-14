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
  let lifeguard = selectedSpot.lifeguard;

  const topRated = () => {
    switch (selectedSpot.rating) {
      case 1: return "⋆";
      case 2: return "⋆⋆";
      case 3: return "⋆⋆⋆";
      case 4: return "⋆⋆⋆⋆";
      case 5: return "⋆⋆⋆⋆⋆";
      default:      return <h5>Not valuated.</h5>
    }


  }
 
  return (
   

    <Container fluid className="spotInfoDesign">
      <Row  className="row1SpotinfoDesign">
        <Col className="col-8 col-md-6 col1SpotinfoDesign">
          <div style={{backgroundImage: `url(${image})`, backgroundSize: "cover"}} className="imageSpotinfo">
            {/* <img 
            className="" 
            src={image}
            alt="spot capture" /> */}
            
          </div>
          
        </Col>
        <Col className="   col2SpotinfoDesign">
            
          <h1 className="tittleSpot">{selectedSpot.spotname}</h1>
          <h4 className="starRating">{topRated(selectedSpot.rating)}</h4>
          <h5 className="">{selectedSpot.city.toUpperCase()}</h5>
          <p className="">{selectedSpot.conditions}</p>
          <p className="">Tipo de playa: {selectedSpot.type.toUpperCase()}</p>
          <p className="">Dónde se encuentra: {selectedSpot.adress.toUpperCase()}</p>
          <h5 className="">Esta playa {lifeguard ? "tiene socorrista" : "no tiene socorrista"}</h5>
          <p className="">Extensión del spot: {selectedSpot.length.toUpperCase()}</p>

           
          
        </Col>
      </Row>
    </Container>
  );
};

export default SpotInfo;
