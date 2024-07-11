import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiSlack,
  SiNvidia,
  SiJupyter,
  SiWindows11,
  SiMacos
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiWindows11 />
        <div style={{ fontSize: '10px' }}>Windows 11</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMacos />
        <div style={{ fontSize: '10px' }}>MacOS</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <div style={{ fontSize: '10px' }}>Visual Studio Code</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNvidia />
        <div style={{ fontSize: '10px' }}>Nvidia</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJupyter />
        <div style={{ fontSize: '10px' }}>Jupyter</div>
      </Col>
    </Row>
  );
}

export default Toolstack;
