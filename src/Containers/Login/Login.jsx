import "./Login.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { errorCheck } from "../../services/usefull";
import axios from "axios";


import Image from "react-bootstrap/Image";
import logoWaves from "../../aessets/logo_waves.png";
import { Col, Container, Row } from "react-bootstrap";

const Login = () => {
  const navigate = useNavigate();
  

  const [user, setUser] = useState({
    
    email: "",
    password: "",
  });

  const [userError, setUserError] = useState({
    
    emailerror: "",
    passworderror: "",
    empty: "",
    wrongCredentials: ""
    
  });

  let body = {
    email: user.email,
    password: user.password
  }

  const loginUser = async (body) => {
    let res = await axios.post(
      "https://backend-fp-geekshubs-production.up.railway.app/auth/login",
      body
    );

    let jwt = res.data.jwt;
    let credentials = {
      token: jwt,
    };

    localStorage.setItem("jwt", credentials.token);
    navigate("/");
  };

  const validateBody = (body) => {
    if (body.email !== "" && body.password !== "") { return true }
  }


  const submitLogin = (e) => {
    e.preventDefault();
    if (validateBody(body)) {
        loginUser(body)
        .then((created) => console.log(created))
        .catch((error) => {
          setUserError((prevState) => ({
            ...prevState,
            wrongCredentials: error.response.data.message,
          }));
        });
    } else {
      setUserError((prevState) => ({
        ...prevState,
        empty: "Check all fields are filled"
      }))
    }
  }

  //Handlers//

  const inputHandler = (e) => {
    setUser((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const errorHandler = (field, value, type, password) => {
    let error = "";
    error = errorCheck(value, type, password);
    setUserError((prevState) => ({
      ...prevState,
      [field + "error"]: error,
    }));
  };

  





  return (
    <form className="bgConfig" onSubmit={submitLogin} >
      <Container className=" homeDesign d-flex align-content-center justify-content-center" >
        <Row className="row container-fluid rowDesign d-flex justify-content-center align-content-center m-0" style={{margin:0}}>
          
         
          <Col className="col col-xl-7  contImage container-fluid">
            <Image className="logoDesign" src={logoWaves}></Image>
            <div className="inputsBox d-flex flex-column align-items-center justify-content-center ">
              <div className="incompleteError">{userError.empty}</div>
              <div className="incompleteError">
                {userError.wrongCredentials}
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
              <div onClick={() => navigate("/")} className="alredyRegister">Not registered yet? Register.</div>
            </div>
          </Col>

          
        </Row>
        
         
       
      </Container>
    </form>
  );
};

export default Login;