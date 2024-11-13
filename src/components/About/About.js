import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about1.jpg";
import Toolstack from "./Toolstack";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        {/* Quote Section */}
        <Row style={{ justifyContent: "center", paddingTop: "20px" }}>
          <Col md={10} style={{ textAlign: "center" }}>
            <h2 style={{ color: "rgb(155 126 172)", fontStyle: "italic" }}>
              "The opposite of courage is not cowardice, it is conformity!"
            </h2>
            <footer className="blockquote-footer" style={{ marginTop: "10px" }}>
              <cite>Rollo May</cite>
            </footer>
          </Col>
        </Row>

        {/* Rest of the About Section */}
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Who am I?
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading">
          Professional Skillset 
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I <strong className="purple">use</strong>
        </h1>
        <Toolstack />
      </Container>
    </Container>
  );
}

export default About;
