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
              <h1>Site Info</h1>
              <p>Recenly we have seen more mask restrictions being lifted and people being ok to be outside again, but still people
                still strugle to get back to a social norm and reconnect with people. "Cool App" can help people find groups or hobbies to join around
                local city. Make an account to start looking for activites or create a post to find people to join your group</p>
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
