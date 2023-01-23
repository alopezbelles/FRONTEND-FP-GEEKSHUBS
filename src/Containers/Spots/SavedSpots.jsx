import React, { useState, useEffect } from "react";
import "./SavedSpots.css";

import { getMySpots } from "../../services/ApiCalls";
import { deleteMySpot } from "../../services/ApiCalls";

import { userData } from "../Spots/userSlice";
import { useSelector } from "react-redux";
import { Card, Col, Container, Row } from "react-bootstrap";

//Esto lo importo para poder sacar el id con el token

const SavedSpots = () => {

  const [savedSpots, setSavedSpots] = useState([]);
  const [error, setError] = useState("");

  const credentialsUser = useSelector(userData);

  const deleteSpot = (id) => {
    deleteMySpot(id).then((res) => spots());
  };

  const spots = () => {
    getMySpots(credentialsUser.credentials.id)
      .then((res) => {
        console.log(res);
        setSavedSpots(res);
      })
      .catch((error) => {
        setError(error.response?.data || "No se pueden obtener los spots");
      });
  };

  useEffect(() => {
    spots();
    
  }, []);

  if (error) {
    return <h2>{error} </h2>;
  }

  if (savedSpots.length > 0) {
    return (
      <Container className="">
        <Row>
          <Col className="d-flex col-12 flex-wrap  justify-content-center">
            {savedSpots.map((savedSpots) => {
              return (
                <Card className="cards" key={savedSpots.data}>
                  <Card.Body>
                    <Card.Title>{savedSpots.Spot.spotname}</Card.Title>
                    <Card.Text>{savedSpots.Spot.city}</Card.Text>
                    <Card.Text></Card.Text>
                    <button onClick={() => deleteSpot(savedSpots.id_userspot)}>
                      Delete
                    </button>
                  </Card.Body>
                </Card>
              );
            })}
          </Col>
        </Row>
      </Container>
    );
  }
};

export default SavedSpots;
