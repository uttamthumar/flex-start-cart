import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { RiDiscussLine } from "react-icons/ri";

export default function Blog() {
  const blogContentCard = [
    {
      id: "1",
      title: "Nesciunt Mete",
      color: "#2db6e",
      background: "#f8e4fd",
      text: "Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis tempore et consequatur.",
    },
    {
      id: "2",
      title: "Nesciunt Mete",
      color: "#f68c09",
      background: "#fde3c4",
      text: "Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis tempore et consequatur.",
    },
    {
      id: "3",
      title: "Nesciunt Mete",
      color: "#08da4e",
      background: "#cffddf",
      text: "Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis tempore et consequatur.",
    },
    {
      id: "4",
      title: "Nesciunt Mete",
      color: "#e9222c",
      background: "#fef7f8",
      text: "Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis tempore et consequatur.",
    },
    {
      id: "5",
      title: "Nesciunt Mete",
      color: "#b50edf",
      background: "#feecf7",
      text: "Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis tempore et consequatur.",
    },
    {
      id: "6",
      title: "Nesciunt Mete",
      color: "#f51f9c",
      background: "#f8e4fd",
      text: "Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis tempore et consequatur.",
    },
  ];
  return (
    <>
      <Container>
        <Row>
          {blogContentCard.map((item, index) => {
            return (
              <Col key={index} lg={4} md={6}>
                <div className="blog__box">
                  <span
                    style={{ color: item.color, background: item.background  }}
                    className="icon"
                  >
                    <RiDiscussLine />
                  </span>
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
