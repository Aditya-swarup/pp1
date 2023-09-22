import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneVolume, faEnvelope } from "@fortawesome/free-solid-svg-icons"; // Import the mail icon
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/m12.png";



export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <h1 className="vvd vd">Meer karishma</h1>
            <h3 className="vvd">Contact:-</h3>
            <div className="contact-info">
              <div className="phone-container">
                <FontAwesomeIcon icon={faPhoneVolume} className="phone-icon" />
                <h4 className="phone-number">+91-6364041545</h4>
              </div>
              <div className="email-container">
                <FontAwesomeIcon icon={faEnvelope} className="mail-icon" />
                <h4 className="email-address">kpathan1104@gmail.com</h4>
              </div>
            </div>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/meer-karishma-pathan-464b6a232/"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://www.behance.net/karishmapathan"><img src={navIcon2} alt="Icon" /></a>
              
            </div>
            <p>Copyright 2023. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>

      <hr className="bbg"></hr>
    </footer>
  );
};
