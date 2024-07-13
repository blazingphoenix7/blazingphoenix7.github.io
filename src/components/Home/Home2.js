import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.jpg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md"; 

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              <span className="purple">LET ME INTRODUCE MYSELF</span> 
            </h1>
            <p className="home-about-body">
              👋 Welcome, I’m Aaryan Mehta. Originally from Mumbai, India, I moved to New York in 2023 to pursue my Master's in Computer Science at New York University.
              <br /><br />
              🤖 My skill set is more stacked than Zidane and CR7's Real Madrid, featuring web development, databases, game development, and AI skills advanced enough to make Marvel's Ultron look like a Toyota Prius.
              <br /><br />
              🔧 I’ve coded GPT-2 and GPT-3 from scratch, conjured magic with GANs, and turned neural networks into digital symphonies. My toolbox is as versatile as Kendrick Lamar's discography, and my code hits as hard as Bohemian Rhapsody’s crescendo.
              <br /><br />
              💼 During my internship at Emkay Global, I helped this investment powerhouse boost their trading profits by over 30%, single-handedly saving India's stock market from post-COVID chaos. Picture me as a code-wielding Kratos, battling financial Gods with algorithms and data.
              <br /><br />
              🖥️ Curious? Check out my projects. Let's make something revolutionary—or at least, let’s not be boring about it.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1><span className="purple">FIND ME ON</span></h1>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="mailto:adm8315@nyu.edu" 
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <MdEmail />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://github.com/blazingphoenix7"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/aaryan-mehta-20b8341a0/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/aary_x21"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
