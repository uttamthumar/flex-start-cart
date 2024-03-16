import React, { useRef } from "react";
import {
  Header,
  Home,
  About,
  Services,
  Blog,
  Product,
  Count,
  Features,
} from "./index";
import { useNavigate } from "react-router-dom";

export default function AllPages() {
  const navigate = useNavigate();
  const sectionRefs = {
    about: useRef(null),
    product: useRef(null),
    services: useRef(null),
    blog: useRef(null),
    home: useRef(null),
  };

  const handleScroll = (sectionId, navigation) => {
    const sectionRef = sectionRefs[sectionId];
    if (sectionRef.current) {
      window.scrollTo({
        top: sectionRef.current.offsetTop,
        behavior: "smooth",
      });
    }
  };
  return (
    <div>
      <Header handleScroll={handleScroll} />
      <Home sectionRefs={sectionRefs} />
      <About sectionRefs={sectionRefs} />
      <Services sectionRefs={sectionRefs} />
      <Count />
      <Features />
      <Blog sectionRefs={sectionRefs} />
      <Product sectionRefs={sectionRefs} />
    </div>
  );
}
