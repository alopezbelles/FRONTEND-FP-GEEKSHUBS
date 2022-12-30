import React from "react";
import "./Home.css";
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
    
      <Container className="container-fluid homeDesign ">
       

        <Row className="row rowDesign">
        <video
             className="backgroundVideo"
            src={videoBg2}
             autoPlay
             loop
             muted
             
           /> 
          <Col className="col ">
         
          <Image className="logoDesign" src={logoWaves}></Image>

          </Col>
          {/* <Col  className="divLogo">HOLA
          </Col> */}
        </Row>
      </Container>
    
  );
};

export default Home;
