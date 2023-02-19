import React from 'react'
import { Container ,Nav ,Navbar,NavDropdown  } from 'react-bootstrap';

import "./navbars.scss";
const Navbers = () => {
  return (
    <div>   
    <Navbar bg="light" expand="lg" className='navmenu-outer'>
    <Container class="navbar-area">
      <Navbar.Brand href="#home">Pridesys IT</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav className="menuitem">
          <Nav.Link href="#home" className='item'>All Products</Nav.Link>
          <Nav.Link href="#link" className='item'>ERP Solution</Nav.Link>
          <Nav.Link href="#home" className='item'>Oracle</Nav.Link>
          <Nav.Link href="#link" className='item'>CyberSquad</Nav.Link>
          <Nav.Link href="#home" className='item'>E-Governace</Nav.Link>
          <Nav.Link href="#link" className='item'>Services</Nav.Link>
          <Nav.Link href="#home" className='item'>Industries</Nav.Link>
          <Nav.Link href="#link" className='item'>Our Clients</Nav.Link>
          <Nav.Link href="#link" className='item'>About Us</Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
    
    </div>
  )
}

export default Navbers