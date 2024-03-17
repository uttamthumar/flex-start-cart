import React, { useState } from "react";
import { Col, Container, Image, Nav, Row } from "react-bootstrap";
import { features, features2 } from "../assets";
import { BiCheck } from "react-icons/bi";
import { features__card } from "../utils/constant";
import TabComponent from "./feturesTab";

export default function Features() {
 
  return (
    <div className="feature">
      <Container>
        <header className="text-center">
          <h2 className="fs-5 text-primary font-bold text-uppercase">
            {" "}
            Features
          </h2>
          <p>Laboriosam et omnis fuga quis dolor direda fara</p>
        </header>
        <Row>
          <Col lg="6">
            <div>
              <Image src={features} alt="features" className="img-fluid" />
            </div>
          </Col>
          <Col md="6">
            <Row className="mt-2 align-self-center gy-4">
              {features__card?.map((item, index) => (
                <Col key={index} md={6} className="aos-init aos-animate">
                  <div className="card__box">
                    <span>
                      <BiCheck />
                    </span>
                    <h3>{item}</h3>
                  </div>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
        <Row className="feture__tab">
          <Col lg={6}>
            <TabComponent />
          </Col>
          <Col lg={6} className="my-5">
            <div>
              <Image src={features2} className="img-fluid" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
