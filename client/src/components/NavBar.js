import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Button, Modal, ListGroupItem, ListGroup } from 'react-bootstrap';

import { Link } from "react-router-dom";
const NavBar = () => {
  const isLoggedIn = sessionStorage.getItem("token") !== null;

  const logout = () =>{
    sessionStorage.clear();
    sessionStorage.removeItem("token");
    window.location.href = "/";
}

  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand style={{color:  "#0b76b8", fontWeight: 600, fontSize: 24}} as={Link} to="/">Rendevoo</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" style={{marginRight: 30}}>
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/Groups">Groups</Nav.Link>
              <Nav.Link as={Link} to="/Events">Events</Nav.Link>
              <Nav.Link as={Link} to="/Account">Account</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          { isLoggedIn ? <Button style={{backgroundColor: "#1DA1F2", border: "none"}} variant="secondary" onClick = {logout}>Log out</Button> :<Button variant="secondary" href='/register'>Log in</Button> }
        </Container>
      </Navbar>
    </div>
  )
}
export default NavBar;