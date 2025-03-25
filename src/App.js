import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import "./scss/app.scss";
import EmptyCart from "./pages/EmptyCart";

function App() {
  return (
    <div className="wrapper">
      <div className="block">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/404" element={<EmptyCart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
