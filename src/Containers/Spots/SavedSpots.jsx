import React, { useState, useEffect } from "react";
import "./SavedSpots.css";

import { getMySpots } from "../../services/ApiCalls";

import { userData } from "../Spots/userSlice";
import { useSelector } from "react-redux";
import { Card, Col, Container, Row } from "react-bootstrap";

//Esto lo importo para poder sacar el id con el token

import { useJwt } from "react-jwt";



const SavedSpots = () => {
//Esto lo uso para poder sacar la id del usuario con el token
    const token = localStorage.getItem("jwt");
  // let { decodedToken } = useJwt(token);
  // const idUser = decodedToken.id


    const [savedSpots, setSavedSpots] = useState([]);
    const [error, setError] = useState("");


    const userCredentials = useSelector(userData);

    const spots = () => {
        getMySpots()
          .then((res) => {
            setSavedSpots(res.data.data);
          })
          .catch((error) => {
            setError(error.response?.data || "No se pueden obtener los spots");
          });
      };


      useEffect(() => {
        spots();
      }, []);
      if (error) {
        return <h2>{error.repeat(1)} </h2>;
      }
      if (savedSpots.lenght !== 0) {
        return (
          <Container className="">
            <Row>
              <Col className="d-flex col-12 flex-wrap  justify-content-center">
                {savedSpots.map((savedSpots) => {
                  return (
                    <Card
                      style={{ width: "12rem" }}
                      className="cards"
                      key={savedSpots.date}
                    >
                      <Card.Body>
                        <Card.Title>{savedSpots.SpotIdSpot}</Card.Title>
                        <Card.Text>{savedSpots.UserIdUser}</Card.Text>
                        <Card.Text>{savedSpots.reason}</Card.Text>
                      </Card.Body>
                    </Card>
                  );
                })}
              </Col>
            </Row>
          </Container>
        );
      }








    // return(
    //     <div>
    //         HOLA SERÉ UN FUTURO SPOT
    //     </div>
    // )


}

export default SavedSpots