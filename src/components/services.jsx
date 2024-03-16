import React from "react";
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import { card1, card2, card3 } from "../assets";

export default function Services() {
  const cardContent = [
    {
      id: "1",
      title: "Ad cupiditate sed est odio    ",
      text: "Eum ad dolor et. Autem aut fugiat debitis voluptatem consequuntur sit. Et veritatis id.",
      img: card1,
    },
    {
      id: "2",
      title: "Voluptatem voluptatum alias",
      text: "Eum ad dolor et. Autem aut fugiat debitis voluptatem consequuntur sit. Et veritatis id.",
      img: card2,
    },
    {
      id: "3",
      title: "Fugit cupiditate alias nobis.",
      text: "Eum ad dolor et. Autem aut fugiat debitis voluptatem consequuntur sit. Et veritatis id.",
      img: card3,
    },
  ];
  return (
    <>
      <header className="text-center pb-5">
        <h2>Our Values</h2>
        <p>Odit est perspiciatis laborum et dicta</p>
      </header>
      <Container>
        <Row>
          {cardContent.map((item, index) => {
            return (
              <Col key={index} lg={4}>
                <div className="box">
                  <Image src={item.img} alt={item.id} className="img-fluid" />
                  <h3 className="text-center">{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
}
