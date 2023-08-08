import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import testC from "../../Assets/Projects/testC.jpg"
import contact from "../../Assets/contact.jpg";
import twon from "../../Assets/twon.png";
import foodM from "../../Assets/foodM.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on personally.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={contact}
              isBlog={false}
              title="Scenario writing for saving contact number"
              description="Saving contact number scenario refers to a specific sequence of steps or interactions that are performed to test a particular aspect, feature, or functionality of a software application, Scenarios are designed to simulate real-world usage situations and help testers identify potential issues, defects, or problems within the software"
              ghLink="https://github.com/Sulaimanpandit/Scenario-for-saving-contact-number.git"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={twon}
              isBlog={false}
              title="Home town App's Bugs"
              description="A bug report, also known as a defect report or issue report, is a formal document used in software development and testing to communicate and document issues or defects found in a software application. Writing effective bug reports is crucial for the development team to understand, reproduce, and ultimately fix the reported issues"
              ghLink="https://github.com/Sulaimanpandit/Home-town-App-s-Bugs.git"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={foodM}
              isBlog={false}
              title="Bug's for Foodmela App"
              description="Identifying and addressing Foodmela application bugs is a critical part of software development and testing, as it ensures that the software functions correctly, meets user expectations, and maintains a high level of quality."
              ghLink="https://github.com/Sulaimanpandit/-Bug-s-for-Foodmela.git"
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={testC}
              isBlog={false}
              title="Test Cases & Test case template"
              description="Creating well-structured test cases helps ensure thorough coverage of the software's functionality and aids in identifying defects and inconsistencies early in the development process. Test cases are often organized into test suites, which group related test cases together for more efficient testing."
              ghLink="https://github.com/Sulaimanpandit/TEMPLATE-TestCase.git"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
