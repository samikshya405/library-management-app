import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
function Header() {
  return (
    <Navbar expand="lg" bg="dark" variant='dark'>
      <Container>
        <Navbar.Brand href="#home">Library</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className="ms-auto">
            <Link to='/dashboard' className='nav-link'>Dashboard</Link>
            <Link to='/signUp' className='nav-link'>Signup</Link>
            <Link to='/' className='nav-link'>Login</Link>

           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header