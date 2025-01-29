import React from "react";
import Header from "./components/Header";
import Categories from "./components/Categories";

import "./scss/app.scss";
import Sort from "./components/Sort";
import Pizzablock from "./components/Pizzablock";
import pizzas from "./assets/pizza.json";

function App() {
  return (
    <div className="wrapper">
      <div className="block"></div>
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>

          <div className="content__items">
            {pizzas.map((obj, i) => (
              <Pizzablock {...obj} key={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
