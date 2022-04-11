import { Col, Row, Container } from "react-bootstrap";
import React from "react"
import { ListGroup } from "react-bootstrap";
import { useState } from "react";
import "./CssPages/Home.css";
import {  Link } from "react-router-dom";
import { Navbar, Nav } from 'react-bootstrap';

//import logo from '../Path/background.jpeg';
function Home() {
  return (
    <div>
      <Container >
        <Row className="row-box">
          <Col className="text-box">
            <div >
              <h1>Looking for friends...</h1>
              <p>Have you spent the last 2 years inside? Since 2020 lives all around the World were changed. 
              With things finally going back to normal we are able to socialize in person again! But do many of us even remember how to do that?!
              With CoolApp you can finally enjoy meeting with people to participate in your favorite and new hobbies!
              </p>
            </div>
          </Col>
          <Col className="img-box"> 
          <img className="map-image" src="/map.jpg" />
          </Col>
        </Row>
      </Container>
      <div>
        <button className="home-button"><Nav.Link as={Link} to="/Register">Get Started</Nav.Link></button>
      </div>
    </div>
  );

}
export default Home;
