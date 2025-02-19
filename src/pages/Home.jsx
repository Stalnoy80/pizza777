import React, { useEffect, useState, useContext } from "react";
import { AppContext } from "../App";
import { useDispatch, useSelector } from "react-redux";
import { setFilters, setPageCount } from "../redux/slices/filterSlice";
import axios from "axios";
import qs from "qs";
import { useNavigate } from "react-router";
//
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import Pizzablock from "../components/PizzaBlock";
import Skeleton from "../components/PizzaBlock/Skeleton";
import Pagination from "./Pagination";
const Home = () => {
  const { searchValue } = useContext(AppContext);
  const sortId = useSelector((state) => state.filterSlice.sort);
  const [pizzas, setPizzas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // const [page, setPage] = useState(1);
  // const [sortActive, setSortActive] = useState(0);
  const sortList = ["rating", "-rating", "price", "-price", "title", "-title"];

  const { category, page } = useSelector((state) => state.filterSlice);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  console.log(sortList[sortId]);

  //

  useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));

      const sort = sortList[sortId];

      dispatch(setFilters({ ...params, sort }));
    }
  }, []);

  //

  console.log(sortList[sortId]);

  useEffect(() => {
    setIsLoading(true);

    axios
      .get(
        `https://813cecfc1deed960.mokky.dev/items?${
          category ? `category=${category}` : ""
        }&sortBy=${sortList[sortId]}&title=*${searchValue}&page=${page}&limit=4`
      )
      .then((res) => {
        setPizzas(res.data);
        setIsLoading(false);
      });

    window.scrollTo(0, 0);
  }, [category, sortList[sortId], searchValue, page]);

  //

  useEffect(() => {
    const string = qs.stringify({
      sortList,
      category,
      page,
    });

    navigate(`?${string}`);
  }, [category, sortList[sortId], searchValue, page]);
  return (
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
            : pizzas.items
                // .filter((obj) =>
                //   obj.title.toLowerCase().includes(searchValue.toLowerCase())
                // )
                .map((obj, i) => <Pizzablock {...obj} key={i} />)}
        </div>
      </div>
      <Pagination
        value={page}
        onChangePage={(num) => dispatch(setPageCount(num))}
      />
    </div>
  );
};

export default Home;
