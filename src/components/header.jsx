import React from 'react';
import { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './header.css';


class Header extends Component
{
    render()
    {
        return(
            <div className="optionsBar">
        

    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="menuBar">
  <Navbar.Brand href="/" className="brandName">GrabThe<span style={{color:'red'}}>Best!</span></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/" className="items">Home &ensp;</Nav.Link>
      <Nav.Link href="/Aboutus" className="items">About Us &ensp;</Nav.Link>
      <Nav.Link href="/Contactus" className="items">Contact Us &ensp;</Nav.Link>
      <NavDropdown title="More" id="collasible-nav-dropdown">
        <NavDropdown.Item href="/Dashboard">Sentiment Analysis</NavDropdown.Item>
        <NavDropdown.Item href="/TermsOfUse">Terms of Use</NavDropdown.Item>
        <NavDropdown.Item href="/PrivacyPolicy">Privacy Policy</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">My WishList</NavDropdown.Item>
      </NavDropdown>
    </Nav>
  </Navbar.Collapse>
</Navbar>

    </div>
           
        )
    }
}

export default Header;