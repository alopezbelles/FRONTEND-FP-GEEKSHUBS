import React from "react";
import "./Home.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Image from "react-bootstrap/Image";
import videoBg from "../../aessets/beach-drone.mp4";
import videoBg2 from "../../aessets/beach-drone-2.mp4";
import logoWaves from "../../aessets/logo_waves.png";
import { Col, Container, Row } from "react-bootstrap";

// const Home = () => {
//   return (
//     <form className="container-fluid home prueba">
//       <Container>
//         <Row className="row containerVideo ">
//           <Col className="col ">
//           {/* <video
//             className="backgroundVideo"
//             src={videoBg}
//             autoPlay
//             loop
//             muted
//           /> */}
//           <div className="content">
//             <Image className="logoDesign" src={logoWaves}></Image>

//           </div>
//           </Col>
//         </Row>
//       </Container>
//     </form>
//   );
// };

const Home = () => {
  return (
    <Container className="container-fluid homeDesign d-flex justify-content-center align-items-center  ">
      <Row className="row-fluid d-flex justify-content-center align-content-center m-0">
        <video className="backgroundVideo" src={videoBg2} autoPlay loop muted />

        <Col className="col contImage">
          <Image className="logoDesign" src={logoWaves}></Image>
          <div className="inputsBox d-flex flex-column align-items-center justify-content-center">
          
          <input
             
              className="inputRegDesign"
              type="text"
              placeholder="  User Name ... "
              name="name"
            />
          <input
             
              className="inputRegDesign"
              type="text"
              placeholder="  Name ... |"
              name="name"
            />
          <input
             
              className="inputRegDesign"
              type="text"
              placeholder="  Adress ... "
              name="name"
            />
          <input
             
              className="inputRegDesign"
              type="text"
              placeholder="  City ... "
              name="name"
            />
          <input
             
              className="inputRegDesign"
              type="text"
              placeholder="  Email ... "
              name="name"
            />
          <input
             
              className="inputRegDesign"
              type="text"
              placeholder="  Password ... "
              name="name"
            />
          <input
             
              className="inputRegDesign"
              type="text"
              placeholder="  Repeat password ... "
              name="name"
            />
          </div>
        </Col>
        

        {/* <Col  className="divLogo">HOLA
          </Col> */}
      </Row>
    </Container>
  );
};

export default Home;
