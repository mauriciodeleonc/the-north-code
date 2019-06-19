import React, { Component }from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logo from './logo.svg';
import Button from 'react-bootstrap/Button';

class Menu extends Component {
  render(){
    return(
      <Navbar bg="transparent" expand="lg">
        <Container>
          <Navbar.Brand href="#Home">
            <img
              alt="The north code logo"
              src={logo}
              width="60"
              height="60"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="#Home" className="navlink">Home</Nav.Link>
              <Nav.Link href="#Services" className="navlink">Our Services</Nav.Link>
              <Nav.Link href="#Portfolio" className="navlink">Portfolio</Nav.Link>
              <Nav.Link href="#Us" className="navlink">Us</Nav.Link>
              <Nav.Link href="www.thenorthcode.com" className="navlink">En</Nav.Link>
              <Nav.Link href="es.thenorthcode.com" className="navlink">Es</Nav.Link>
              <Button href="#Contact" className='button'>Contact Us!</Button>
            </Nav>
            </Navbar.Collapse>
          </Container>
      </Navbar>
    );
  }
}

export default Menu;
