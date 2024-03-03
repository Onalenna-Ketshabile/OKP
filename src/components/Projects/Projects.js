import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import internetspeed from "../../Assets/Projects/internetspeed.png";
import passwordchecker from "../../Assets/Projects/passwordchecker.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={internetspeed}
              isBlog={false}
              title="Internet Speed Test"
              description="A program that measures the upload and download speed (In Megabytes) of the connected internet"
              ghLink="https://github.com/Onalenna-Ketshabile/Internet-Speed-Test-Using-Python"
              // demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={passwordchecker}
              isBlog={false}
              title="Password Strength Checker"
              description="A program that evaluates the strength of a user's password by ensuring it meets specific criteria"
              ghLink="https://github.com/Onalenna-Ketshabile/Password-Strength-Checker-Using-Python"
              // demoLink=""
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
