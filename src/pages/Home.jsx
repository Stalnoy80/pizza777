import React, { useEffect, useState, useContext } from "react";
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import Pizzablock from "../components/PizzaBlock";
import Skeleton from "../components/PizzaBlock/Skeleton";
import Pagination from "./Pagination";
import { AppContext } from "../App";
import { useSelector } from "react-redux";

const Home = () => {
  const { searchValue } = useContext(AppContext);
  const sortId = useSelector((state) => state.filterSlice.sort);
  const [pizzas, setPizzas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  // const [sortActive, setSortActive] = useState(0);
  const sortList = ["rating", "-rating", "price", "-price", "title", "-title"];

  const categoryId = useSelector((state) => state.filterSlice.category);

  useEffect(() => {
    setIsLoading(true);

    fetch(
      `https://813cecfc1deed960.mokky.dev/items?${
        categoryId ? `category=${categoryId}` : ""
      }&sortBy=${sortList[sortId]}&title=*${searchValue}&page=${page}&limit=4`
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setPizzas(data);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);

    console.log(categoryId);
  }, [categoryId, sortId, searchValue, page]);

  return (
    <div className="content">
      <div className="container">
        <div className="content__top">
          <Categories />
          <Sort sortActive={sortId} />
        </div>
        <h2 className="content__title">Все пиццы</h2>

        <div className="content__items">
          {isLoading
            ? [...new Array(7)].map((_, i) => <Skeleton key={i} />)
            : pizzas.items
                // .filter((obj) =>
                //   obj.title.toLowerCase().includes(searchValue.toLowerCase())
                // )
                .map((obj, i) => <Pizzablock {...obj} key={i} />)}
        </div>
      </div>
      <Pagination onChangePage={(num) => setPage(num)} />
    </div>
  );
};

export default Home;
