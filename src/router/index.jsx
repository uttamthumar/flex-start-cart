import React from "react";
import { Routes, Route } from "react-router-dom";
import Cart from "../components/cart";
import AllPages from "../components/allPages";
import { Toaster } from "react-hot-toast";

export default function Router() {
  return (
    <>
      <div>
        <Toaster />
        <Routes>
          <Route path="/" element={<AllPages />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </>
  );
}
