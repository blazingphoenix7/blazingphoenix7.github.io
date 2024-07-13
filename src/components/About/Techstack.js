import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiReact, DiPython, DiJava, DiGit, DiDjango
} from "react-icons/di";
import {
  SiTensorflow, SiPytorch, SiFirebase, SiDocker, SiGithub, SiR, SiAmazonaws, SiNumpy, SiPandas, SiUnity,
  SiAdobephotoshop, SiFlutter, SiHtml5, SiCss3, SiNodedotjs, SiFlask, SiVercel, SiAndroidstudio, SiMysql, SiC, SiCplusplus, SiCsharp
} from "react-icons/si";
import {
  IoLogoJavascript
} from "react-icons/io";


import unrealEngineIcon from "../../Images/unreal-engine-icon.png"; 

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <h4> <br /><br /> {} <strong className="purple">Languages</strong></h4>
      <Col xs={4} md={2} className="tech-icons"><DiPython /><div style={{ fontSize: '10px' }}>Python</div></Col>
      <Col xs={4} md={2} className="tech-icons"><DiJava /><div style={{ fontSize: '10px' }}>Java</div></Col>
      <Col xs={4} md={2} className="tech-icons"><IoLogoJavascript /><div style={{ fontSize: '10px' }}>JavaScript</div></Col>
      <Col xs={4} md={2} className="tech-icons"><SiCplusplus /><div style={{ fontSize: '10px' }}>C++</div></Col>
      <Col xs={4} md={2} className="tech-icons"><SiC /><div style={{ fontSize: '10px' }}>C</div></Col>
      <Col xs={4} md={2} className="tech-icons"><SiR /><div style={{ fontSize: '10px' }}>R</div></Col> 
      <Col xs={4} md={2} className="tech-icons"><SiCsharp /><div style={{ fontSize: '10px' }}>C#</div></Col>
      
      <h4> <br /><br /> {} <strong className="purple">AI/ML</strong></h4>
      <Col xs={4} md={2} className="tech-icons"><SiTensorflow /><div style={{ fontSize: '10px' }}>TensorFlow</div></Col>
      <Col xs={4} md={2} className="tech-icons"><SiPytorch /><div style={{ fontSize: '10px' }}>PyTorch</div></Col>
      <Col xs={4} md={2} className="tech-icons"><SiNumpy /><div style={{ fontSize: '10px' }}>Numpy</div></Col>
      <Col xs={4} md={2} className="tech-icons"><SiPandas /><div style={{ fontSize: '10px' }}>Pandas</div></Col>

      <h4> <br /><br /> {} <strong className="purple">Web Dev</strong></h4>
      <Col xs={4} md={2} className="tech-icons"><DiReact /><div style={{ fontSize: '10px' }}>React</div></Col>
      <Col xs={4} md={2} className="tech-icons"><SiHtml5 /><div style={{ fontSize: '10px' }}>HTML</div></Col>
      <Col xs={4} md={2} className="tech-icons"><SiCss3 /><div style={{ fontSize: '10px' }}>CSS</div></Col>
      <Col xs={4} md={2} className="tech-icons"><SiNodedotjs /><div style={{ fontSize: '10px' }}>Node.js</div></Col>
      <Col xs={4} md={2} className="tech-icons"><DiDjango /><div style={{ fontSize: '10px' }}>Django</div></Col>
      <Col xs={4} md={2} className="tech-icons"><SiFlask /><div style={{ fontSize: '10px' }}>Flask</div></Col>
      <Col xs={4} md={2} className="tech-icons"><SiVercel /><div style={{ fontSize: '10px' }}>Vercel</div></Col>
      
      <h4> <br /><br /> {} <strong className="purple">Database Systems</strong></h4>
      <Col xs={4} md={2} className="tech-icons"><SiMysql /><div style={{ fontSize: '10px' }}>MySQL</div></Col>
      <Col xs={4} md={2} className="tech-icons"><SiAmazonaws /><div style={{ fontSize: '10px' }}>AWS</div></Col>
      <Col xs={4} md={2} className="tech-icons"><SiFirebase /><div style={{ fontSize: '10px' }}>Firebase</div></Col>
      
      <h4> <br /><br /> {} <strong className="purple">Other Technologies</strong></h4>
      <Col xs={4} md={2} className="tech-icons"><SiDocker /><div style={{ fontSize: '10px' }}>Docker</div></Col>
      <Col xs={4} md={2} className="tech-icons"><SiAndroidstudio /><div style={{ fontSize: '10px' }}>Android Studio</div></Col>
      <Col xs={4} md={2} className="tech-icons"><SiFlutter /><div style={{ fontSize: '10px' }}>Flutter</div></Col>
      <Col xs={4} md={2} className="tech-icons"><SiGithub /><div style={{ fontSize: '10px' }}>GitHub</div></Col>
      <Col xs={4} md={2} className="tech-icons"><DiGit /><div style={{ fontSize: '10px' }}>Git</div></Col>
      <Col xs={4} md={2} className="tech-icons"><SiAdobephotoshop /><div style={{ fontSize: '10px' }}>Adobe Photoshop</div></Col>
      <Col xs={4} md={2} className="tech-icons"><img src={unrealEngineIcon} alt="Unreal Engine" style={{ height: '1em' }} /><div style={{ fontSize: '10px' }}>Unreal Engine</div></Col>
      <Col xs={4} md={2} className="tech-icons"><SiUnity /><div style={{ fontSize: '10px' }}>Unity</div></Col>
    </Row>
  );
}

export default Techstack;
