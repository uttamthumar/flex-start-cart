import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { CiFaceSmile } from "react-icons/ci";
import { countCard_content } from "../utils/constant";

export default function Count() {
  return (
    <div className="count__main">
      <Container>
        <Row>
          {countCard_content?.map((item, index) => (
            <Col key={index} lg={3} md={6}>
              <div className="count__contain__box">
                <span className={`icon__count ${item.class} `}>
                  {" "}
                  {item.icon}
                </span>
                <div>
                  <span className=" text__count"> {item.count} </span>
                  <p>{item.text}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
