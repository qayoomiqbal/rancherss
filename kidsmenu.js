import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Pizza from "./card2/pizza";
import Footer from "./Footer";
import Navbarr from "./navbar";

function Kidsmenu() {
  return (
    <div style={{ backgroundColor: "black", color: "white" }}>
      <Navbarr />
      <Container>
        <Row className="justify-content-center">
          
            <h1 >Kids Menu</h1>
          
        </Row>
        <Row className="justify-content-center">
         
            <Pizza />
          
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default Kidsmenu;
