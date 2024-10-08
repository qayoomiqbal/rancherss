import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { Col, Row } from 'react-bootstrap';
import Deel from './card2/deel';
import Chickenburger from './card2/chickenburger';
import Beefburger from './card2/beefburger';
import Pizza from './card2/pizza';
import Quickbite from './quickbite';
import Fries from './fries';
import Footer from './Footer';
import About from './about';
import Navbarr from './navbar';
function Home() {
  return (
    <div style={{ backgroundColor: 'black' }}>
      <Navbarr/> {/* Use your custom navbar */}
      <Carousel className="mt-5 pt-5">
        <Carousel.Item>
          <img src={require("./pizza.png")} className="d-block w-100" alt="Pizza" />
          <Carousel.Caption>
            <h3>Pizza</h3>
            <p>Special Pizza: A delightful fusion of unique toppings and flavors, crafted to tantalize your taste buds.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={require("./burger.png")} className="d-block w-100" alt="Zinger Burger" />
          <Carousel.Caption>
            <h3>Zinger</h3>
            <p>A Zinger Burger is a spicy, crispy chicken sandwich known for its bold flavor and satisfying crunch.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={require("./burge.png")} className="d-block w-100" alt="Special Zinger" />
          <Carousel.Caption>
            <h3>Special Zinger</h3>
            <p>A Zinger Burger is a spicy, crispy chicken sandwich known for its bold flavor and satisfying crunch.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <Container className="text-center my-5" style={{color:'white'}}>
        <Nav defaultActiveKey="/home" className="flex-column flex-md-row justify-content-center mb-3" style={{color:'white'}}>
          <Nav.Item>
            <Nav.Link href="/deals">Deals</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="chickenburger">Chicken Burger</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="/beefburger">Beef Burger</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="/pizza">Pizza</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="/frize">Frize</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="/quickbites">Quick Bites</Nav.Link>
          </Nav.Item>
        </Nav>

        <h1 style={{ color: 'white',marginTop:20,marginBottom:20,textAlign:"left" }}>Deals</h1>
        <Deel />
        <h1 style={{ color: 'white',marginTop:20,marginBottom:20, textAlign:"left"}}>Chicken Burger</h1>
        <Chickenburger />
        <h1 style={{ color: 'white',marginTop:20,marginBottom:20,textAlign:"left" }}>Beef Burger</h1>
        <Beefburger />
        <h1 style={{ color: 'white',marginTop:20,marginBottom:20,textAlign:"left" }}>Pizza</h1>
        <Pizza />
        <h1 style={{ color: 'white',marginTop:20,marginBottom:20,textAlign:"left" }}>Quick Bites</h1>
        <Quickbite />
        <h1 style={{ color: 'white',marginTop:20,marginBottom:20,textAlign:"left"}}>Fries</h1>
        <Fries />
      </Container>
      <Footer />
    </div>
  );
}

export default Home;
