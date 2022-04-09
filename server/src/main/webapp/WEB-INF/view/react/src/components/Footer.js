import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import "./CssPages/Footer.css";

const Footer = () => {
    
  return (
    <footer className="footer">
    <Container >
        <Row>
          <Col>
            <div className="foot-col" >
              Terms&Conditions
            </div>  
          </Col>
          <Col>
          <div className="foot-col">
              Contact Us
          </div>
          </Col>
          <Col>
          <div className="foot-col">
             © 2022 Dr. Coopers Warriors inc
          </div>
          </Col>
        </Row>
      </Container>
  </footer>
  );
};
export default Footer;