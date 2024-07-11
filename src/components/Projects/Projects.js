import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
// Placeholder images for your projects
import gpt2Img from "../../Assets/Projects/gpt2.png";
import foreignWhispersImg from "../../Assets/Projects/foreignWhispers.png";
import deepTradingImg from "../../Assets/Projects/deepTrading.png";
import creditCardImg from "../../Assets/Projects/creditCard.png";
import skinLesionImg from "../../Assets/Projects/skinLesion.png";
import monetizeImg from "../../Assets/Projects/monetize.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently. Want to see more? Download the attached resume or visit my GitHub!
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gpt2Img}
              isBlog={false}
              title="GPT-2 From Scratch"
              description="Designed and built an optimized GPT-2 (124M) model from scratch, meticulously following the architecture guidelines from OpenAI’s GPT-2 and GPT-3 papers."
              //ghLink="https://github.com/blazingphoenix7/GPT-2_Optimized_Model"
              //demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={foreignWhispersImg}
              isBlog={false}
              title="YouTube Video Translation"
              description="Engineered a website to translate YouTube videos from English to French, utilizing Python, Whisper for speech recognition, and MarianMT for translation."
              ghLink="https://github.com/blazingphoenix7/YouTube-Video-Translation"
              //demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={deepTradingImg}
              isBlog={false}
              title="Deep Reinforcement Learning for Stock Trading"
              description="Developed an automated trading solution using Deep Reinforcement Learning to maximize portfolio values in a simulated stock trading environment."
              ghLink="https://github.com/blazingphoenix7/ML-Trading-Bot"
              //demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={creditCardImg}
              isBlog={false}
              title="Credit Card Default Prediction"
              description="Led the development of a predictive model using Gated Recurrent Units to predict the probability that a customer does not pay back their credit card balance."
              ghLink="https://github.com/blazingphoenix7/CredNet-AMEX-Credit-Card-Default-Prediction"
              //demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={skinLesionImg}
              isBlog={false}
              title="AI-Based Skin Lesion Analysis"
              description="Developed a machine learning model to differentiate between malignant and benign skin lesions using image data resembling smartphone photos."
              //ghLink="https://github.com/blazingphoenix7/Skin_Lesion_Analysis"
              //demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={monetizeImg}
              isBlog={false}
              title="Generative Adverserial Network (GAN) that paints like Claude Monet"
              description="Developed an artistic AI that learns to paint like Claude Monet, transforming everyday photos into impressionist art."
              ghLink="https://github.com/blazingphoenix7/MONET-ize-Your-Photos"
              //demoLink="#"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
