import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            <span className="purple">Well, if I knew who I was and what I wanted to do, my therapist would be unemployed.</span>
            <br /><br /> {}
            Anyways, I am <span className="purple">Aaryan Mehta </span>
            from <span className="purple"> Brooklyn, New York.</span>
            <br /><br /> {}
            A substantial portion of my technical skill set is dedicated to developing innovative applications with <span className="purple">Artificial Intelligence and Machine Learning.</span> 
            <br /><br /> {}
            <br /><br /> {}
            I'm currently working as an AI developer at The Institute of Fine Arts in New York City where my primary duty is to develop a state-of-the-art live video multi-language subtitle generation system. This system is mainly powered by  my <span className="purple">Master's in Computer Science</span> from <span className="purple">New York University</span>, where I've taken courses like 
            Artificial Intelligence, Machine Learning, Data Structures and Algorithms, Data Science, Database Management Systems, 
            Operating Systems and Big Data.
            <br /><br /> {}
            I'm currently pursuing my <span className="purple">Master's in Computer Science</span> from <span className="purple">New York University</span>, where I've taken courses like 
            Artificial Intelligence, Machine Learning, Data Structures and Algorithms, Data Science, Database Management Systems, 
            Operating Systems and Big Data.
            <br /><br /> {}
            I have also completed my <span className="purple">Bachelor's in Computer Engineering</span> from <span className="purple">Mumbai University</span>, India.
            <br /><br /> {}
            Apart from coding, my other hobbies are:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing and developing video games.
            </li>
            <li className="about-activity">
              <ImPointRight /> I am an avid soccer fan. #Hala Madrid. 
            </li>
            <li className="about-activity">
              <ImPointRight /> I love being up to date on the latest developments in Astrophysiscs and Quantum Mechanics.
            </li>
            <li className="about-activity">
              <ImPointRight /> I am big cinema nerd and love binging on movies by Quentin Tarantino, Stanley Kubrick, Orson Welles, Martin Scorsese and Christopher Nolan.
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
