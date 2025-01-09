import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import internetspeed from "../../Assets/Projects/internetspeed.png";
import passwordchecker from "../../Assets/Projects/passwordchecker.png";
import ec2 from "../../Assets/Projects/EC2.png";
import hosting from "../../Assets/Projects/HOSTING.png";


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
              imgPath={ec2}
              isBlog={false}
              title="AWS EC2 Instance with Secure SSH Access"
              description="Deploying an AWS EC2 instance with secure SSH access by configuring key pairs and security groups."
              ghLink="https://github.com/Onalenna-Ketshabile/AWS-EC2-Instance-with-Secure-SSH-Access"
              // demoLink=""
            />
          </Col>       
            
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hosting}
              isBlog={false}
              title="Hosting a Static Website on AWS S3"
              description="Configuring an S3 bucket for static website hosting, creating custom index and error pages"
              ghLink="https://github.com/Onalenna-Ketshabile/Hosting-a-Static-Website-on-AWS-S3"
              // demoLink=""
            />
          </Col>
                
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={internetspeed}
              isBlog={false}
              title="Internet Speed Test (Python)"
              description="A program that measures the upload and download speed (In Megabytes) of the connected internet"
              ghLink="https://github.com/Onalenna-Ketshabile/Internet-Speed-Test-Using-Python"
              // demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={passwordchecker}
              isBlog={false}
              title="Password Strength Checker (Python)"
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
