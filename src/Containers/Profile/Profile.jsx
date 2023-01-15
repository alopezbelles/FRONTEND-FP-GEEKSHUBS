import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Profile.css";

import { errorCheck } from "../../services/usefull";
import { editUser } from "../../services/ApiCalls";
import { useJwt } from "react-jwt";
import { useNavigate } from "react-router-dom";

import Image from "react-bootstrap/Image";
import logoWaves from "../../aessets/logo_waves.png";
import { Col, Container, Row } from "react-bootstrap";

const Profile = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("jwt");
  let { decodedToken } = useJwt(token);

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
    } else if ((body.password = "")) {
      delete body.password;
    }
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
      <form className="bgProfile">
        <Container fluid className="profileDesign">
          <Image className="logoDesign" src={logoWaves}></Image>
          <Row className="row1Profile">
            <Col className="col1Profile">
              <div className="inputsBoxProfile">
                <h3 className="yourDataText">Your User Data:</h3>
                <div>{decodedToken.name}</div>
                <div>{decodedToken.email}</div>
                <div>{decodedToken.address}</div>
                <div>{decodedToken.city}</div>
              </div>
            </Col>
            <Col onSubmit={submitHandler} className="col2Profile">
              <div className="inputsBoxProfile d-flex flex-column align-items-center justify-content-center ">
                <div className="incompleteError">
                  {userError.incompleteerror}
                </div>

                <input
                  className="inputRegDesign"
                  type="Email"
                  placeholder="  New email ... "
                  name="email"
                />
                <div className="errorInput">{userError.emailerror}</div>

                <input
                  onBlur={(e) =>
                    errorHandler(e.target.name, e.target.value, "password")
                  }
                  onChange={inputHandler}
                  className="inputRegDesign"
                  type="Password"
                  placeholder="  New password ... "
                  name="password"
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
                />
                <div className="errorInput">{userError.password2error}</div>

                <div className="col d-flex text-center align-items-center buttonDivReg">
                  <button className="buttonDesignRegister">
                    UPDATE PROFILE
                  </button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </form>
    );
  } else {
    navigate("/about");
  }
};

export default Profile;
