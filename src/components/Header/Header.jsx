import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';



function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
         
         
          </Nav>
          <Nav className='ms-auto'>
          <Nav.Link href="/signup"><Button variant="dark">SignUp</Button></Nav.Link>
            <Nav.Link href="/login"><Button variant="dark">Login</Button></Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header