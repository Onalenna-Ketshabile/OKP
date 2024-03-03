import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view custom-border" style={{}}>
      <Card.Body>
      <blockquote className="blockquote mb-0">

      <p style={{ textAlign: "justify" }}>
    Hi, I'm <span className="purple">Onalenna Ketshabile</span>, a dedicated IT professional from Johannesburg, South Africa.
    Currently, I'm pursuing a <span className="purple">BSc (Hons) in Computer Science</span> with a specialization in Cybersecurity.
    Alongside, I hold a <span className="purple">BSc in IT (Computer Science and Informatics)</span> from the University of Johannesburg.
    My professional journey encompasses roles such as an <span className="purple">IT Intern</span> at Atos and a contracted <span className="purple">Network Support Engineer</span> at Cell C, where I provide 2nd-tier support for significant projects.
    Beyond my formal roles, I engage as a <span className="purple">freelance developer</span>, exploring full-stack development and gaining insights into various software architectures, which greatly aids my endeavors in website penetration testing.
    <br />
    <br />
        When I'm not immersed in the technical realm, you'll find me engaged in:
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
