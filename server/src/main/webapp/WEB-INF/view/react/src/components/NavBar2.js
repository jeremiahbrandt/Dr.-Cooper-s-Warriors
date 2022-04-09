import React from 'react';
import {Navbar, Nav, Container} from 'react-bootstrap';

import {  Link } from "react-router-dom";
const NavBar= () =>{
  return (
  <div className="container-fluid">
    <Navbar bg="light" expand="lg">
      <Container>
      <Navbar.Brand as={Link} to="/">CoolApp</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link as={Link} to="/Groups">Groups</Nav.Link>
          <Nav.Link as={Link} to="/Events">Events</Nav.Link>
          <Nav.Link as={Link} to="/Account">Account</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      </Container>
    </Navbar>
  </div>
  )
}
export default NavBar;