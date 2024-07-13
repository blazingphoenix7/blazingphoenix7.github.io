import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            <span className="purple">Well, if I knew who I was and what I wanted to do, my therapist wouldn't be a 
              millionaire now, would they?</span>
            <br /><br /> {}
            But anyways, I am <span className="purple">Aaryan Mehta </span>
            from <span className="purple"> Brooklyn, New York, NY.</span>
            <br /><br /> {}
            I am currently pursuing my Masters in Computer Science from New York University, where I've taken courses like 
            Artificial Intelligence, Machine Learning, Data Structures and Algorithms, Data Science, Database Management Systems, 
            Operating Systems and Big Data.
            <br /><br /> {}
            I have also completed my Bachelor of Computer Engineering from Mumbai University, India.
            <br /><br /> {}
            Apart from coding, my other hobbies are:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Video Games.
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling.
            </li>
            <li className="about-activity">
              <ImPointRight /> Hip-Hop Nerd.
            </li>
          </ul>
          <br /> 
          <p style={{ color: "rgb(155 126 172)" }}>
            "The opposite of courage is not cowardice, it is conformity!"
          </p>
          <footer className="blockquote-footer">Rollo May</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
