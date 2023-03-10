import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Spots.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { allSpots } from "../../services/ApiCalls"; 
import { addPlace } from "../../Containers/Spots/spotsSlice";

import SpotTarget from "../../Components/SpotTarget/SpotTarget";

const Spots = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [spots, setSpots] = useState([]);

  const selectionSpot = (spot) => {
    dispatch(addPlace({ ...spot, details: spot }));
    navigate("/spotinfo");
  };


  useEffect(() => {
    if (spots.length === 0) {
      allSpots().then((spots) => setSpots(spots));
    }
  });

  if (spots.length > 0) {
    return (
      <Container fluid className=" spotsDesign">
        <Row className="row1Spots d-flex flex-column align-items-center justify-content-center">
          <Col className="titleSpots">Discover the best spots</Col>
          <Col className="descriptionTitle">
            Access the following spots to discover the best places to surf
            safely. Know the conditions of each beach as well as its safety
            level and which are the best seasons for surfing. Take advantage of
            the experiences of other users and discover which are the best
            beaches around you to practice sport in an environment tested for
            it.
          </Col>
        </Row>
        <Row className="row2Spots">
          {spots.map((spot, index) => {
            return (
              <Col className="col-10 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center">
                <SpotTarget
                  key={index}
                  spot={spot}
                  selectionSpot={selectionSpot}
                ></SpotTarget>
              </Col>
            );
          })}
        </Row>
      </Container>
    );
  } else {
    return (
      navigate("/about")
    )
  }
};

export default Spots;
