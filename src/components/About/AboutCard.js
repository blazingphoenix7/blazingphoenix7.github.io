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
            millionaire now, would they?
          </span>
            <br />

            But anyways, I am <span className="purple">Aaryan Mehta </span>
            from <span className="purple"> Brooklyn, New York, NY.</span>
            <br />
            I am currently pursuing my MS in CS from New York University.
            <br />
            I have completed my Bachelor of Engineering in Computer Engineering from University of Mumbai, India.
            <br />
            <br />
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

          <p style={{ color: "rgb(155 126 172)" }}>
            "The opposite of courage is not cowardice, it is conformity!"{" "}
          </p>
          <footer className="blockquote-footer">Rollo May</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
