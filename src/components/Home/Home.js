import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/myIllustration.png";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import Pingme from './../Pingme'

function Home({}) {

//  const [isPingOpen, setIsPingOpen] = useState(true);

  return (
    <section>
   

 
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingTop: 60 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'm
                <strong className="main-name"> Onalenna </strong>
                <br></br>
                <strong className="main-name"> Ketshabile</strong>

              </h1>

              <div style={{ padding: 50, paddingTop: 0, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={4} style={{ paddingBottom: 0,zIndex:55000, display: 'flex', alignItems: 'center',justifyContent: 'center', padding: '50px' }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
