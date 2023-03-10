import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { errorCheck } from "../../services/usefull";
import axios from "axios";
import "./Home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "react-bootstrap/Image";
import logoWaves from "../../aessets/logo_waves.png";
import { Col, Container, Row } from "react-bootstrap";



const Home = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("jwt");

  if (token) {
    navigate("/spots");
  }

  const [user, setUser] = useState({
    username: "",
    name: "",
    address: "",
    city: "",
    email: "",
    password: "",
    password2: "",
  });

  const [userError, setUserError] = useState({
    usernameerror: "",
    nameerror: "",
    addresserror: "",
    cityerror: "",
    emailerror: "",
    passworderror: "",
    password2error: "",
    incompleteerror: "",
    emailAlreadyInBBDD: "",
  });

  const registerUser = async (body) => {
    let res = await axios.post(
      "https://backend-fp-geekshubs-production.up.railway.app/auth/register",
      body
    );

    navigate("/login");
  };

  //Handlers//

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
    if (validateBody(body)) {
      setUserError((prevState) => ({
        ...prevState,
        incompleteerror: "",
      }));
      registerUser(body)
        .then((created) => console.log(created))
        .catch((error) => {
          setUserError((prevState) => ({
            ...prevState,
            emailAlreadyInBBDD: error.response.data,
          }));
        });
    } else {
      setUserError((prevState) => ({
        ...prevState,
        incompleteerror: "Please enter your details to register.",
      }));
    }
  };

  const body = {
    username: user.username,
    name: user.name,
    address: user.address,
    city: user.city,
    email: user.email,
    password: user.password,
    password2: user.password2,
  };

  const validateBody = (body) => {
    if (
      body.username !== "" &&
      body.name !== "" &&
      body.address !== "" &&
      body.city !== "" &&
      body.email !== "" &&
      body.password !== "" &&
      body.password2 !== ""
    ) {
      return true;
    }
  };

  return (
    <form onSubmit={submitHandler} className="bgConfig">
      <Container className=" homeDesign d-flex align-content-center justify-content-center">
        <Row
          className="row container-fluid rowDesign d-flex justify-content-center align-content-center m-0"
          style={{ margin: 0 }}
        >
          <Col className="col col-xl-7  contImage container-fluid">
            <Image className="logoDesign" src={logoWaves}></Image>
            <div className="inputsBox d-flex flex-column align-items-center justify-content-center ">
              <div className="incompleteError">{userError.incompleteerror}</div>
              <div className="incompleteError">
                {userError.emailAlreadyInBBDD}
              </div>
              <input
                onBlur={(e) =>
                  errorHandler(e.target.name, e.target.value, "text")
                }
                onChange={inputHandler}
                className="inputRegDesign"
                type="text"
                placeholder="  User Name ... "
                name="username"
              />
              <div className="errorInput">{userError.usernameerror}</div>
              <input
                onBlur={(e) =>
                  errorHandler(e.target.name, e.target.value, "text")
                }
                onChange={inputHandler}
                className="inputRegDesign"
                type="text"
                placeholder="  Name ... |"
                name="name"
              />
              <div className="errorInput">{userError.nameerror}</div>
              <input
                onBlur={(e) =>
                  errorHandler(e.target.name, e.target.value, "text")
                }
                onChange={inputHandler}
                className="inputRegDesign"
                type="text"
                placeholder="  Address ... "
                name="address"
              />
              <div className="errorInput">{userError.addresserror}</div>
              <input
                onBlur={(e) =>
                  errorHandler(e.target.name, e.target.value, "text")
                }
                onChange={inputHandler}
                className="inputRegDesign"
                type="text"
                placeholder="  City ... "
                name="city"
              />
              <div className="errorInput">{userError.cityerror}</div>
              <input
                onBlur={(e) =>
                  errorHandler(e.target.name, e.target.value, "email")
                }
                onChange={inputHandler}
                className="inputRegDesign"
                type="Email"
                placeholder="  Email ... "
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
                placeholder="  Password ... "
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
                <button className="buttonDesignRegister">REGISTER</button>
              </div>
              <div
                onClick={() => navigate("/login")}
                className="alredyRegister"
              >
                Already registered? Log in.
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </form>
  );
};

export default Home;
