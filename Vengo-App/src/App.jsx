import React from "react";
import Navbar from "./Components/NavbarF/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/HomeF/Home";
import Cart from "./Pages/CartF/Cart";
import PlaceOrder from "./Pages/PlaceOrderF/PlaceOrder";
import "./index.css";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="order" element={<PlaceOrder />} />
      </Routes>
    </div>
  );
};

export default App;   