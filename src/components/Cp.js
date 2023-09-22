import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/m3.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Cp = () => {



  
  

  return (
    <section className="contact" id="about">
    <h1 className="about">About Me</h1>
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
        <h3>I'm Meer Karishma Pathan, a UX/UI designer with a passion for creating exceptional digital experiences. Through thoughtful design and user-centered approaches, I bring ideas to life with intuitive and visually stunning solutions. With a commitment to continuous learning and staying at the forefront of design trends, I thrive on pushing boundaries and exceeding client expectations. Let's collaborate and bring your vision to life through captivating designs that leave a lasting impression.</h3>
          </Col>
        </Row>
        
      </Container>
    </section>
  )
}
