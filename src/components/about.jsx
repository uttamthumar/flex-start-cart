import React from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { about } from "../assets";

export default function About() {
  return (
    <section id="about" className="hero d-flex align-items-center">
      <Container className="d-flex justify-content-center align-item-center my-auto">
        <Row>
          <Col lg="6" className="d-flex flex-column justify-content-center">
            <div className="content">
              <h3>Who we Are</h3>
              <h2>
                Expedita voluptas omnis cupiditate totam eveniet nobis sint
                iste. Dolores est repellat corrupti reprehenderit.
              </h2>
              <p>
                Quisquam vel ut sint cum eos hic dolores aperiam. Sed deserunt
                et. Inventore et et dolor consequatur itaque ut voluptate sed
                et. Magnam nam ipsum tenetur suscipit voluptatum nam et est
                corrupti.
              </p>
              <div className="text-center text-lg-start">
                <Button variant="primary" className="btn__getStarted">
                  Read More
                </Button>
              </div>
            </div>
          </Col>
          <Col lg="6" className="d-flex align-items-center">
            <div>
              <Image src={about} />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
