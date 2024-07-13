import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiNvidia,
  SiJupyter,
  SiAnaconda,
  SiJenkins,
  SiGooglecloud,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiAnaconda />
        <div style={{ fontSize: '10px' }}>Anaconda</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJupyter />
        <div style={{ fontSize: '10px' }}>Jupyter</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJenkins />
        <div style={{ fontSize: '10px' }}>Jenkins</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGooglecloud />
        <div style={{ fontSize: '10px' }}>Google Cloud</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNvidia />
        <div style={{ fontSize: '10px' }}>Nvidia</div>
      </Col>
    </Row>
  );
}

export default Toolstack;
