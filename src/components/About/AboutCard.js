import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone, I am <span className="purple">Sulaiman Pandit </span>
            from <span className="purple"> Kolkata, India.</span>
            <br /> I am a Software Test Engineer , and I have been working in the field of software testing for the past 2.6 years. During this time, I have had the opportunity to work on various projects and gain valuable experience in ensuring the quality and reliability of software applications.
            <br />
            <br/>
            As a test engineer, my primary focus is on designing and executing test cases, identifying and documenting defects, and collaborating with developers and other team members to deliver high-quality software products to our clients and end-users.
            
            <br />
            <br />
            Apart from Testing, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring New Technologies
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Sulaiman</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
