import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Categories from "./components/Categories";

import "./scss/app.scss";
import Sort from "./components/Sort";
import Pizzablock from "./components/PizzaBlock";
import Skeleton from "./components/PizzaBlock/Skeleton";
//
function App() {
  const [pizzas, setPizzas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch("https://813cecfc1deed960.mokky.dev/items")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setPizzas(data);
        setIsLoading(false);
      });
  }, []);

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
            {isLoading
              ? [...new Array(7)].map((_, i) => <Skeleton key={i} />)
              : pizzas.map((obj, i) => <Pizzablock {...obj} key={i} />)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
