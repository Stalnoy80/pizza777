import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import pic from "../assets/img/empty-cart.png";

const EmptyCart = () => {
  return (
    <div className="wrapper">
      <div className="content">
        <div className="container container--cart">
          <div className="cart cart--empty">
            <h2>Корзина пустая 😕</h2>
            <p>
              Вероятней всего, вы не заказывали ещё пиццу.
              <br />
              Для того, чтобы заказать пиццу, перейди на главную страницу.
            </p>
            <img src={pic} alt="Empty cart" />
            <Link to="/" className="button button--black">
              <span>Вернуться назад</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmptyCart;
