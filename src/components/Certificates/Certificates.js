import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CertificateCard from "./CertificateCards";
import Particle from "../Particle";
import awsCloudPractioner from "../../Assets/Certificates/aws-cloud-practitioner.png";
import azureFundamentals from "../../Assets/Certificates/Microsoft-Azure-Fundamentals.png";
import isc2cc from "../../Assets/Certificates/isc2-certified-cybersecurity.png";


function Certificates() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Professional <strong className="purple">Certifications </strong>
        </h1>
        <p style={{ color: "white" }}>
          I'm commit to learning and mastering the knowledge in my career
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          
          <Col md={4} className="project-card">
            <CertificateCard
              imgPath={awsCloudPractioner}
              isBlog={true}
              title="AWS Certified Cloud Practitioner"
              description=""
              ghLink="https://www.credly.com/badges/1bd81ff8-7258-43e8-b529-797baed22084/public_url"
        
            />
          </Col>

          <Col md={4} className="project-card">
            <CertificateCard
              imgPath={azureFundamentals}
              isBlog={true}
              title="Microsoft Certified Azure Fundamentals"
              description=""
              ghLink="https://learn.microsoft.com/api/credentials/share/en-us/OnalennaKetshabile-6564/5B12325E63BF68?sharingId=1F31CA19633708BB"
           
            />
          </Col>

          <Col md={4} className="project-card">
            <CertificateCard
              imgPath={isc2cc}
              isBlog={true}
              title="(ISC)² Certified in Cybersecurity"
              description=""
              ghLink="https://raw.githubusercontent.com/Onalenna-Ketshabile/myfiles/main/ISC.png"
      
            />
          </Col>



        </Row>
      </Container>
    </Container>
  );
}

export default Certificates;
