import "./Login.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { errorCheck } from "../../services/usefull";
import axios from "axios";


import Image from "react-bootstrap/Image";
import logoWaves from "../../aessets/logo_waves.png";
import { Col, Container, Row } from "react-bootstrap";

const Login = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("jwt");

  if (token) {
    navigate("/");
  }

  const [user, setUser] = useState({
    
    email: "",
    password: "",
    
  });

  const [userError, setUserError] = useState({
    
    emailerror: "",
    passworderror: "",
    incompleteerror: "",
    
  });

  const loginUser = async (body) => {
    let res = await axios.post(
      "https://backend-fp-geekshubs-production.up.railway.app/auth/login",
      body
    );
    navigate("/");
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
      loginUser(body)
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
    
    email: user.email,
    password: user.password,
    
  };

  const validateBody = (body) => {
    if (
      
      body.email !== "" &&
      body.password !== "" 
    ) {
      return true;
    }
  };

  return (
    <form className="bgConfig" onSubmit={submitHandler} >
      <Container className=" homeDesign d-flex align-content-center justify-content-center" >
        <Row className="row container-fluid rowDesign d-flex justify-content-center align-content-center m-0" style={{margin:0}}>
          
          {/* Esto es el video de bg de home, pero el navegador no lo reproduce */}
          {/* <video
            className="backgroundVideo"
            src={videoBg3}
            autoPlay
            loop
            muted
          /> */}
         
          <Col className="col col-xl-7  contImage container-fluid">
            <Image className="logoDesign" src={logoWaves}></Image>
            <div className="inputsBox d-flex flex-column align-items-center justify-content-center ">
              <div className="incompleteError">{userError.incompleteerror}</div>
              <div className="incompleteError">
                {userError.emailAlreadyInBBDD}
              </div>
              
             
              
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

              
              <div className="col d-flex text-center align-items-center buttonDivReg">
                <button className="buttonDesignRegister">LOGIN</button>
              </div>
              <div onClick={() => navigate("/login")} className="alredyRegister">Not registered yet? Register.</div>
            </div>
          </Col>

          
        </Row>
        
         
       
      </Container>
    </form>
  );
};

export default Login;