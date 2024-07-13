import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import gpt2Img from "../../Assets/Projects/gpt2.png";
import foreignWhispersImg from "../../Assets/Projects/foreignWhispers.png";
import deepTradingImg from "../../Assets/Projects/AI-Trading.jpg";
import creditCardImg from "../../Assets/Projects/creditCard.png";
import melanomaImg from "../../Assets/Projects/melanoma.jpg";
import ganImg from "../../Assets/Projects/GAN.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          <strong className="purple">My Recent Works</strong>
        </h1>
        <p style={{ color: "white", fontSize: "20px" }}>
        <br /><br /> {}
          Here are a few projects I've worked on recently. 
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gpt2Img}
              isBlog={false}
              title = <strong className="purple">GPT-2 From Scratch</strong> 
              description="Designed and built an optimized GPT-2 (124M) model from scratch, meticulously implementing OpenAI’s GPT-2 and GPT-3 papers."
              ghLink="https://github.com/blazingphoenix7/Reproduce-GPT2-and-GPT3"
              //demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={melanomaImg}
              isBlog={false}
              title = <strong className="purple">AI-Based Skin Lesion Analysis</strong>
              description="Developed a machine learning model to differentiate between malignant and benign skin lesions using image data from smartphone photos with 95% accuracy."
              ghLink="https://github.com/blazingphoenix7/Early-Skin-Cancer-Detection-AI.git"
              //demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={deepTradingImg}
              isBlog={false}
              title = <strong className="purple">Deep Reinforcement Learning for Stock Trading</strong> 
              description="Developed an automated trading solution using Deep Reinforcement Learning to maximize portfolio values in a simulated stock trading environment. The model achieved a 30% return on investment; clearly excedding market benchmarks."
              ghLink="https://github.com/blazingphoenix7/ML-Trading-Bot"
              //demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={creditCardImg}
              isBlog={false}
              title = <strong className="purple">Credit Card Default Prediction</strong>
              description="Led the development of a predictive model using Gated Recurrent Units to predict the probability that a customer does not pay back their credit card balance with 93% accuracy."
              ghLink="https://github.com/blazingphoenix7/CredNet-AMEX-Credit-Card-Default-Prediction"
              //demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={foreignWhispersImg}
              isBlog={false}
              title = <strong className="purple">YouTube Video Translation</strong>
              description="Engineered a website to translate YouTube videos from English to French, utilizing Python, Whisper for speech recognition, and MarianMT for translation."
              ghLink="https://github.com/blazingphoenix7/YouTube-Video-Translation"
              //demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ganImg}
              isBlog={false}
              title = <strong className="purple">Generative Adverserial Network (GAN) that paints like Claude Monet</strong> 
              description="Developed an artistic AI that learns to paint like Claude Monet, transforming everyday photos into impressionist art."
              ghLink="https://github.com/blazingphoenix7/MONET-ize-Your-Photos"
              //demoLink="#"
            />
          </Col>
        </Row>
        <p style={{ color: "white", fontSize: "20px" }}>
          Want to see more? Navigate to the resume section at the top of the screen to download my resume or visit my GitHub profile!
        </p>
      </Container>
    </Container>
  );
}

export default Projects;
