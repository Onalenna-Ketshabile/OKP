import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsFillEyeFill} from "react-icons/bs";

function CertificateCards(props) {
  return (
    <Card className="project-card-view">
      
      <div style={{ background: 'rgb(255,255,255)', height: '190px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
  <Card.Img
    variant="top"
    src={props.imgPath}
    alt="card-img"
    style={{ width: '100%', height: '100%', objectFit: 'contain' }}
  />
</div>




      <Card.Body>
        <Card.Title style={{paddingLeft: 40, paddingRight: 40}}>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <Button variant="primary" href={props.ghLink} target="_blank">
          <BsFillEyeFill /> &nbsp;
          {props.isBlog ? "View Certification" : "GitHub"}
        </Button>
        {"\n"}
        {"\n"}

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {"Demo"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default CertificateCards;
