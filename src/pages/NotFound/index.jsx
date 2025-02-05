import React from "react";
import { BrowserRouter as Link } from "react-router-dom";
import pic from "../../assets/img/empty-cart.png";
import styles from "./NotFound.module.scss";

console.log(styles);

const NotFound = () => {
  return (
    <div className="wrapper">
      <div className="content">
        <div className="container container--cart">
          <div className="cart cart--empty">
            <h2>Нет такой страницы!!!! 😕</h2>
            <p>
              Вероятней всего, вы ввели неверный адрес.
              <br />
              Для того, чтобы заказать пиццу, перейди на главную страницу.
            </p>
            <img src={pic} alt="Empty cart" />
            <Link to="/" className="button button--black">
              <span>Вернуться назад</span>
            </Link>
            <div className={styles.root}>часики</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
