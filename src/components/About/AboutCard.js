import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view custom-border" style={{}}>
      <Card.Body>
        <blockquote className="blockquote mb-0">

          <p style={{ textAlign: "justify" }}>
            Hi, I'm <span className="purple">Onalenna Ketshabile</span>, a cybersecurity professional based in Johannesburg, South Africa. I’m currently pursuing a <span className="purple">BSc (Hons) in Computer Science</span> with a specialization in Cybersecurity at the University of Johannesburg. I also hold a <span className="purple">BSc in IT (Computer Science and Informatics)</span>, where I developed a strong foundation in software development and IT systems.
            <br />
            <br />
            My professional experience spans various roles, including my current position as a <span className="purple">Cyber Security Analyst</span> at IGuardSA, where I provide 24/7 security monitoring and incident response. I've worked with tools like QRadar, Microsoft Defender, and Kaspersky to secure client environments. Additionally, I've held roles as an <span className="purple">IT Intern</span> at Atos and a contracted <span className="purple">Network Support Engineer</span> at Cell C, where I optimized reporting processes and supported critical network infrastructure.
            <br />
            <br />
            I'm passionate about cloud security and continuously enhance my skills through certifications and hands-on projects. You can check out my certifications and achievements on the <span className="purple">Certification</span> page.
            <br />
            <br />
            When I'm not immersed in the world of cybersecurity, I enjoy:
          </p>
          <ul>
            <li className="about-activity">
              - Chess
            </li>
            <li className="about-activity">
              - Video Games
            </li>
            <li className="about-activity">
              - Piano
            </li>
          </ul>
        </blockquote>

      </Card.Body>
    </Card>
  );
}

export default AboutCard;
