import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Profile.css";
import { useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { savesData } from "../../Containers/Spots/spotsSlice";

import { errorCheck } from "../../services/usefull";
import { editUser } from "../../services/ApiCalls";
import { getMyUserData } from "../../services/ApiCalls";
import { useJwt } from "react-jwt";
import { useDispatch } from "react-redux";
import Image from "react-bootstrap/Image";
import logoWaves from "../../aessets/logo_waves.png";
import { Col, Container, Row } from "react-bootstrap";
import SavedSpots from "../Spots/SavedSpots";
import { login } from "../Spots/userSlice";

const Profile = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = localStorage.getItem("jwt");
  let { decodedToken } = useJwt(token);
  // const id = decodedToken.id;

  // const [userspot, setUserspot] = useState([])

  // const dataUser = {
  //   id: decodedToken.id,
  //   name: decodedToken.name,
  //   username: decodedToken.username,
  //   password: decodedToken.password,
  // }





// console.log(decodedToken)
// console.log(decodedToken.id)
  const userData = () =>
    { setUser((prevState) => ({
      ...prevState,
      username: decodedToken?.username,
    }));
    getMyUserData(token)
    .then (res => {dispatch(
      login({ credentials: res })
    );})
    
  }



  const [user, setUser] = useState({
    username: "",
    email: "",
    // password: "",
    // password2: "",
  });

  const [userError, setUserError] = useState({
    usernameerror: "",
    emailerror: "",
    // passworderror: "",
    // password2error: "",
    incompleteerror: "",
  });

  useEffect(() => {
    userData()
  }, []);

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

  const errorHandler = (field, value, type) => {
    let error = "";
    error = errorCheck(value, type);
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
    } 
    // else if ((body.password = "")) {
    //   delete body.password;
    // }
    // console.log(body.username)
    editUser(body, token)
      .then(localStorage.removeItem("jwt"))
      .then(navigate("/login"));
  };

  const body = {
    username: user.username,
    email: user.email,
    // password: user.password,
  };

  if (decodedToken) {
    return (
      
        <Container fluid className="profileDesign bgProfile">
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
            <div onSubmit={submitHandler} >
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
                    errorHandler(e.target.name, e.target.value, "email")
                  }
                  onChange={inputHandler}
                  className="inputRegDesign"
                  type="Email"
                  // value={user.password}

                  name="email"
                  placeholder="  New email ... "
                />
                <div className="errorInput">{userError.emailerror}</div>
                {/* <input
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

                /> */}
                {/* <div className="errorInput">{userError.password2error}</div> */}

                <div className="col d-flex text-center align-items-center buttonDivReg">
                  <button className="buttonDesignRegister">
                    UPDATE PROFILE
                  </button>
                </div>
              </div>
              </div>
            </Col>
          </Row>
            <div>
          {/* AQUÍ TENDRÉ QUE MOSTRAR MIS ALQUILERES */}
          <Row>
            <h2 className="yourDataText">These are my spots:</h2>

           <SavedSpots />
           
          
          </Row>
          </div>
        </Container>
      
    );
  } else {
    navigate("/");
  }
};

export default Profile;
