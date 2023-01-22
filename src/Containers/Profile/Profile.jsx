import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Profile.css";
import { useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { savesData } from "../../Containers/Spots/spotsSlice";
// import { getMySpots } from "../../services/ApiCalls"; 
// import axios from "axios";

import { errorCheck } from "../../services/usefull";
import { editUser } from "../../services/ApiCalls";
import { useJwt } from "react-jwt";

import Image from "react-bootstrap/Image";
import logoWaves from "../../aessets/logo_waves.png";
import { Col, Container, Row } from "react-bootstrap";
import SavedSpots from "../Spots/SavedSpots";

const Profile = () => {
  // const mySpots = useSelector(savesData);
  // const mySpots = useState([]);

  // const nameSpot = mySpots
  // console.log(nameSpot)

  const navigate = useNavigate();
  const token = localStorage.getItem("jwt");
  let { decodedToken } = useJwt(token);
  // const id = decodedToken.id;

  // const [userspot, setUserspot] = useState([])

  const [user, setUser] = useState({
    username: "",
    password: "",
    password2: "",
  });

  const [userError, setUserError] = useState({
    usernameerror: "",
    passworderror: "",
    password2error: "",
    incompleteerror: "",
  });

  useEffect(() => {
    setUser((prevState) => ({
      ...prevState,
      username: decodedToken?.username,
    }));
  }, [decodedToken]);

  // const validateBody = (body) => {
  //   if (body.username !== "" && body.password !== "" && body.password2 !== "") {
  //     return true;
  //   }
  // };

  const inputHandler = (e) => {
    setUser((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const errorHandler = (field, value, type, password1) => {
    let error = "";
    error = errorCheck(value, type, password1);
    setUserError((prevState) => ({
      ...prevState,
      [field + "error"]: error,
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (body.username == "") {
      delete body.username;
      // console.log(body.username)
    } else if ((body.password = "")) {
      delete body.password;
    }
    // console.log(body.username)
    editUser(body, token)
      .then(localStorage.removeItem("jwt"))
      .then(navigate("/login"));
  };

  const body = {
    username: user.username,
    password: user.password,
  };

  if (decodedToken) {
    return (
      <form  onSubmit={submitHandler} className="bgProfile">
        <Container fluid className="profileDesign">
          <Image className="logoDesignProfile" src={logoWaves}></Image>
          <Row className="row1Profile">
            <Col className="col1Profile">
                
            
              <div className="boxInfo">
                <h3 className="yourDataText">Your User Data:</h3>
                <div>Username: {decodedToken.username}</div>
                <div>Email: {decodedToken.email}</div>
                <div>Address: {decodedToken.address}</div>
                <div>City: {decodedToken.city}</div>
                <div>Your ID: {decodedToken.id}</div>
              </div>
              
            </Col>
            <Col className="col2Profile">
            {/* <form  > */}
              <div className="inputsBoxProfile d-flex flex-column align-items-center justify-content-center ">
                <div className="incompleteError">
                  {userError.incompleteerror}
                </div>
                <p className="yourDataText2">Want to update  your data?</p>

                <input
                  className="inputRegDesign"
                  type="text"
                  placeholder="  New User Name ... "
                  name="username"
                  value={user.username}
                  onChange={inputHandler}
                />
                

                <input
                  onBlur={(e) =>
                    errorHandler(e.target.name, e.target.value, "password")
                  }
                  onChange={inputHandler}
                  className="inputRegDesign"
                  type="Password"
                  // value={user.password}

                  name="password"
                  placeholder="  New password ... "
                />
                <div className="errorInput">{userError.passworderror}</div>
                <input
                  onBlur={(e) =>
                    errorHandler(
                      e.target.name,
                      e.target.value,
                      "password2",
                      user.password
                    )
                  }
                  onChange={inputHandler}
                  className="inputRegDesign"
                  type="Password"
                  placeholder="  Repeat password ... "
                  name="password2"
                  // value={user.password2}

                />
                <div className="errorInput">{userError.password2error}</div>

                <div className="col d-flex text-center align-items-center buttonDivReg">
                  <button className="buttonDesignRegister">
                    UPDATE PROFILE
                  </button>
                </div>
              </div>
              {/* </form> */}
            </Col>
          </Row>
          {/* AQUÍ TENDRÉ QUE MOSTRAR MIS ALQUILERES */}
          <Row>
            <h2 className="yourDataText">These are my spots:</h2>

           {/* <SavedSpots/> */}
           
          
          </Row>
        </Container>
      </form>
    );
  } else {
    navigate("/");
  }
};

export default Profile;
