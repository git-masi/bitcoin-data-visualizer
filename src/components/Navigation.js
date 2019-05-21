import React from 'react';
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { IndexLinkContainer } from "react-router-bootstrap";
import logo from '../assets/images/bitcoin-logo.svg';

const Navigation = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
      <Navbar.Brand>
        <img
          alt="Bitcoin Viz Logo"
          src={logo}
          width="30"
          height="30"
          className="d-inline-block align-top mr-3"
        />
        { 'BitcoinViz' }
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <IndexLinkContainer to="/">
            <Nav.Link>Home</Nav.Link>
          </IndexLinkContainer>
          <IndexLinkContainer to="/about">
            <Nav.Link>About</Nav.Link>
          </IndexLinkContainer>
          <IndexLinkContainer to="/invest">
            <Nav.Link>Invest</Nav.Link>
          </IndexLinkContainer>
          <IndexLinkContainer to="/price-index">
            <Nav.Link>Price Index</Nav.Link>
          </IndexLinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Navigation;