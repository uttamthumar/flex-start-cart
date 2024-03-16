import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { logo } from "../assets";
import Image from "react-bootstrap/Image";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

export default function Header({ handleScroll }) {
  const checkQty = useSelector((state) => state.productData.isCartExists);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/cart");
  };

  return (
    <>
      <Navbar
        expand="lg"
        className=" header fixed-top header-scrolled navbar-mobile"
      >
        <Container
          fluid
          className="container-xl d-flex align-items-center justify-content-between"
        >
          <Nav.Link href="#home">
            <Image src={logo} />
            <span>FlexStart</span>
          </Nav.Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto gap-4">
                <Nav.Link as={Link} to="/">
                  Home
                </Nav.Link>
                <Nav.Link onClick={() => handleScroll("about")}>About</Nav.Link>
                <Nav.Link href="#home">Service</Nav.Link>
                <Nav.Link onClick={() => handleScroll("product")}>
                  Portfolio
                </Nav.Link>
                <Nav.Link href="#home">Team</Nav.Link>
                <Nav.Link href="#link">Blog</Nav.Link>
                <span
                  onClick={handleClick}
                  className="position-relative my-auto"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                    />
                  </svg>
                  {checkQty?.length && (
                    <span className="position-absolute  cart-quantaty  px-2 rounded-pill">
                      {checkQty?.length}
                    </span>
                  )}
                </span>
              </Nav>
            </Navbar.Collapse>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
