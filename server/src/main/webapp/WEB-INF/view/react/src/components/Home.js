import { Col, Row, Container } from "react-bootstrap";
import { ListGroup } from "react-bootstrap";
import { useState } from "react";
import "./CssPages/Home.css";
import {  Link } from "react-router-dom";
//import logo from '../Path/background.jpeg';
function Home() {
  return (
    <div>
      <Container >
        <Row className="row-box">
          <Col className="text-box">
            <div >
              <h1>Site Info</h1>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in
                the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
                PageMaker including versions of Lorem Ipsum.</p>
            </div>
          </Col>
          <Col className="img-box"> 
            {/* <h1>Image</h1> */}
            {/* <img src={logo} name="Logo" /> */}
          </Col>
        </Row>
      </Container>
      <div>
        <button className="home-button"><Link as={Link} style={{ textDecoration: 'none', color: 'black' }}to="/Register">Groups</Link></button>
        
      </div>
    </div>
  );

}
export default Home;
