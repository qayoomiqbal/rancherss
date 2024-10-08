import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import BootstrapNavbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navbarr() {
  return (
    <div>
      <BootstrapNavbar bg="dark" variant="dark" expand="lg" fixed="top">
        <Container>
          <BootstrapNavbar.Brand href="#home">
            <img src={require("./download.png")} alt="Logo" style={{ width: 100, height: 50 }} />
          </BootstrapNavbar.Brand>
          <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
          <BootstrapNavbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="about">About</Nav.Link>
              <Nav.Link href="kidsmenu">Kids Menu</Nav.Link>
              <NavDropdown title="Menu" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Fries</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Pizza</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Burger</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Drink</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </BootstrapNavbar.Collapse>
        </Container>
      </BootstrapNavbar>
    </div>
  );
}

export default Navbarr;
