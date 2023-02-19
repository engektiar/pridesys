import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
 import "./header.scss";
const Header = () => {
  return (
    <div> 
    <Navbar    expand="lg" className='headermain'>
    <Container>
     
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse className="justify-content-end">
       <Nav className='menu'>         
            <Nav.Link href="#link" className='item'>Blog</Nav.Link>
            <Nav.Link href="#link" className='item'>Support</Nav.Link>
            <Nav.Link href="#link" className='item'>Career</Nav.Link>
            <Nav.Link href="#home" className='item'>Contact us</Nav.Link>
       </Nav>
    </Navbar.Collapse>
    </Container>
  </Navbar>
   </div>
  )
}

export default Header