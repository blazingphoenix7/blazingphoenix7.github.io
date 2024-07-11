import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  CgCPlusPlus, CgDatabase
} from "react-icons/cg";
import {
  DiJavascript1, DiReact, DiPython, DiJava, DiGit, DiDjango
} from "react-icons/di";
import {
  SiTensorflow, SiPytorch, SiFirebase, SiDocker, SiGithub, SiR, SiAmazonaws, SiNumpy, SiPandas, SiUnity, 
  SiAdobephotoshop, SiFlutter
} from "react-icons/si";
import {
  IoLogoJavascript
} from "react-icons/io";
import {
  BsFillCameraReelsFill
} from "react-icons/bs";
import {
  GrMysql
} from "react-icons/gr";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython /><div style={{ fontSize: '10px' }}>Python</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava /><div style={{ fontSize: '10px' }}>Java</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <IoLogoJavascript /><div style={{ fontSize: '10px' }}>JavaScript</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus /><div style={{ fontSize: '10px' }}>C++</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <BsFillCameraReelsFill /><div style={{ fontSize: '10px' }}>C</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiR /><div style={{ fontSize: '10px' }}>R</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiTensorflow /><div style={{ fontSize: '10px' }}>TensorFlow</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPytorch /><div style={{ fontSize: '10px' }}>PyTorch</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase /><div style={{ fontSize: '10px' }}>Firebase</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact /><div style={{ fontSize: '10px' }}>React</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDocker /><div style={{ fontSize: '10px' }}>Docker</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub /><div style={{ fontSize: '10px' }}>GitHub</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAmazonaws /><div style={{ fontSize: '10px' }}>AWS</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <GrMysql /><div style={{ fontSize: '10px' }}>SQL</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiUnity /><div style={{ fontSize: '10px' }}>Unity</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAdobephotoshop /><div style={{ fontSize: '10px' }}>Adobe Photoshop</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit /><div style={{ fontSize: '10px' }}>Git</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiDjango /><div style={{ fontSize: '10px' }}>Django</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNumpy /><div style={{ fontSize: '10px' }}>Numpy</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPandas /><div style={{ fontSize: '10px' }}>Pandas</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFlutter /><div style={{ fontSize: '10px' }}>Flutter</div>
      </Col>
    </Row>
  );
}

export default Techstack;
