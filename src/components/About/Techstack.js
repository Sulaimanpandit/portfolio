import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiDocker,
  // DiReact,
  DiJenkins,
  // DiMongodb,
  DiAws,
  DiGit,
  DiJava,
} from "react-icons/di";
import {
  SiGit,
  SiGithub,
  // SiNextdotjs,
  // SiSolidity,
  SiPostgresql,
  SiPostman,
  SiJirasoftware,
  SiKubernetes,
  SiWorkplace,
  SiOculus,
  SiMeta,
  SiSlack,
  SiMacos,
  SiAndroid,
  SiLinux,
  SiWindows,
  SiUbuntu,
  SiQuest,
  SiFacebook,
  SiFacebookgaming,
  SiInstagram,
} from "react-icons/si";
import {TbBrandFigma } from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        {<SiPostman/>}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        {<DiDocker/>}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <TbBrandFigma />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJenkins />
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSolidity />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs />
      <Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit >
      </Col> */}
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiAws />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJirasoftware/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiKubernetes/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiWorkplace/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        < SiOculus/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        < SiMeta/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        < SiSlack/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMacos/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        < SiAndroid/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiLinux/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiWindows/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiUbuntu/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiQuest/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        < SiFacebook/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFacebookgaming/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiInstagram/>
      </Col>
    
      
    </Row>
  );
}

export default Techstack;
