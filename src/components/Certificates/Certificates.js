import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CertificateCard from "./CertificateCards";
import Particle from "../Particle";
import awsCloudPractioner from "../../Assets/Certificates/aws-cloud-practitioner.png";
import azureFundamentals from "../../Assets/Certificates/Microsoft-Azure-Fundamentals.png";
import isc2cc from "../../Assets/Certificates/isc2-certified-cybersecurity.png";
import udemy from "../../Assets/Certificates/udemy.png"
import linkedin from "../../Assets/Certificates/linkedin.png"
import tryhackme from "../../Assets/Certificates/tryhackme.png"


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

          <Col md={4} className="project-card">
            <CertificateCard
              imgPath={linkedin}
              isBlog={true}
              title="Introduction to AWS Threat Detection"
              description=""
              ghLink="https://www.linkedin.com/learning/certificates/999b146343138d68edd3a33dc362bc586c48eb91e2081ab906972bd7c35293d4?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3Bdl2yyV2BQiyyZKJ5V%2BSp5w%3D%3D"
      
            />
          </Col>
          
          <Col md={4} className="project-card">
            <CertificateCard
              imgPath={tryhackme}
              isBlog={true}
              title="Advent of Cyber 2023 Challenge"
              description=""
              ghLink="https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-HNI63V4XQ3.png"
      
            />
          </Col>

          <Col md={4} className="project-card">
            <CertificateCard
              imgPath={udemy}
              isBlog={true}
              title="Information Security Fundamentals"
              description=""
              ghLink="https://www.udemy.com/certificate/UC-d2d1dd26-3e35-49df-b6ff-69239fdd59d9/"
      
            />
          </Col>

          <Col md={4} className="project-card">
            <CertificateCard
              imgPath={udemy}
              isBlog={true}
              title="The Complete ISO/IES 27001 Information Security Management"
              description=""
              ghLink="https://www.udemy.com/certificate/UC-c886eb05-796f-48e2-b772-dec0bbdcf4e1/"
      
            />
          </Col>

          <Col md={4} className="project-card">
            <CertificateCard
              imgPath={linkedin}
              isBlog={true}
              title="Cloud Security and Audit Fundamentals: AWS, Azure, and GCP"
              description=""
              ghLink="https://www.linkedin.com/learning/certificates/970f1dedbaa1a996cff5f020b01e55ce82a64415d838acd5492e58405a5533e6?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3Bdl2yyV2BQiyyZKJ5V%2BSp5w%3D%3D"
      
            />
          </Col>

          



          <Col md={4} className="project-card">
            <CertificateCard
              imgPath={udemy}
              isBlog={true}
              title="AWS, JavaScript, React | Deploy Web Apps on the Cloud"
              description=""
              ghLink="https://www.udemy.com/certificate/UC-ab1ba716-b16e-41c5-b06f-2505bf0af48c/"
      
            />
          </Col>

    

          <Col md={4} className="project-card">
            <CertificateCard
              imgPath={udemy}
              isBlog={true}
              title="Data Science: Python for Data Analysis Full Bootcamp"
              description=""
              ghLink="https://www.udemy.com/certificate/UC-1492c515-cada-4e20-bd3e-1b870c471683/"
      
            />
          </Col>

          <Col md={4} className="project-card">
            <CertificateCard
              imgPath={udemy}
              isBlog={true}
              title="Python for beginners - Learn all the basics of python"
              description=""
              ghLink="https://www.udemy.com/certificate/UC-fce5fa83-74c4-4703-958d-0d194972e05c/"
      
            />
          </Col>

          <Col md={4} className="project-card">
            <CertificateCard
              imgPath={udemy}
              isBlog={true}
              title="The Complete Front-End Web Development Course"
              description=""
              ghLink="https://www.udemy.com/certificate/UC-75907196-8bce-43c4-bc06-32d8cd54dc15/"
      
            />
          </Col>

          <Col md={4} className="project-card">
            <CertificateCard
              imgPath={udemy}
              isBlog={true}
              title="Angular Material Basics"
              description=""
              ghLink="https://www.udemy.com/certificate/UC-fbae1401-2f78-4da6-9c6c-bbdf073523b5/"
      
            />
          </Col>

          <Col md={4} className="project-card">
            <CertificateCard
              imgPath={udemy}
              isBlog={true}
              title="Docker Course for Beginners"
              description=""
              ghLink="https://www.udemy.com/certificate/UC-83e2a7da-0bd7-45fc-bc2a-845cc3205643/"
      
            />
          </Col>

          <Col md={4} className="project-card">
            <CertificateCard
              imgPath={udemy}
              isBlog={true}
              title="Java Web Services Basics"
              description=""
              ghLink="https://www.udemy.com/certificate/UC-f7fcc58d-ae13-4efb-b171-488df14ed45a/"
      
            />
          </Col>

          <Col md={4} className="project-card">
            <CertificateCard
              imgPath={udemy}
              isBlog={true}
              title="Java Web Services Basics"
              description=""
              ghLink="https://www.udemy.com/certificate/UC-f7fcc58d-ae13-4efb-b171-488df14ed45a/"
      
            />
          </Col>




        </Row>
      </Container>
    </Container>
  );
}

export default Certificates;
