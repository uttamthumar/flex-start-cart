import React from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { hero } from "../assets";

export default function Home() {
  return (
    <section className="hero d-flex align-items-center">
      <Container className="d-flex justify-content-center align-item-center my-auto">
        <Row>
          <Col lg="6" className="d-flex flex-column justify-content-center">
            <h2>
              We are team of talented designers making websites with Bootstrap
            </h2>
            <h2 className="text-base fs-4 mt-1  ">
              We are team of talented designers making websites with Bootstrap
            </h2>
            <div className="mt-5 d-flex align-items-center ">
              <Button variant="primary" className="btn__getStarted">
                {" "}
                Get Started
              </Button>
            </div>
          </Col>
          <Col lg="6">
            <div>
              <Image src={hero} />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
