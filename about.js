import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Quickbite from "./quickbite";
import Footer from "./Footer";
import Navbarr from "./navbar";

function About() {
  return (
    <div style={{ backgroundColor: "black", color: "white" }}>
      <Container>
        <Row className="justify-content-center">
          <Col md={8} className="text-center">
            <h1 style={{ color: "red" }}>About Us</h1>
          </Col>
        </Row>
        <Row className="justify-content-center">
            <Navbarr/>
          <p>One night aftr’ a long day ov’ showdowns, a couple of cowboys came together to cook up sum monstrous burgers to fill up their empty bellies. Texas Jack, one of them, said to ye others “I want meself a meal like this every single day!”. Bill, who was cookin’ up the finger licking meat thought why not? So, he started cooking up the biggest, messiest and mightiest burgers the town had ever devoured!</p>
            <Quickbite />
          
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default About;
