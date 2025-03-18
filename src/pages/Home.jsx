import React, { useEffect, useState, useContext, useRef } from "react";
import { AppContext } from "../App";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import qs from "qs";
import { useNavigate } from "react-router";
//
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import Pizzablock from "../components/PizzaBlock";
import Skeleton from "../components/PizzaBlock/Skeleton";
import Pagination from "./Pagination";
import { setFilters, setPageCount } from "../redux/slices/filterSlice";
import { setItems } from "../redux/slices/pizzaSlice";
const Home = () => {
  const { searchValue } = useContext(AppContext);
  // const sortId = useSelector((state) => state.filterSlice.sort);
  const [isLoading, setIsLoading] = useState(true);
  // const [page, setPage] = useState(1);
  // const [sortActive, setSortActive] = useState(0);
  const sortList = ["rating", "-rating", "price", "-price", "title", "-title"];

  const { category, page, sort } = useSelector((state) => state.filterSlice);
  const items = useSelector((state) => state.pizzaSlice.items);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isSearch = useRef(false);
  const isMounted = useRef(false);

  //

  useEffect(() => {
    if (isMounted.current) {
      const string = qs.stringify({
        sort,
        category,
        page,
      });

      navigate(`?${string}`);
    }
    isMounted.current = true;
  }, [category, sort, page]);

  //

  useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));

      dispatch(setFilters({ ...params }));

      isSearch.current = true;
    }
  }, []);

  //

  const sortedList = sortList[sort];

  const fetchPizzas = async () => {
    setIsLoading(true);

    try {
      const { data } = await axios.get(
        `https://813cecfc1deed960.mokky.dev/items?${
          category ? `category=${category}` : ""
        }&sortBy=${sortedList}&title=*${searchValue}&page=${page}&limit=4`
      );

      dispatch(setItems(data.items));
    } catch (error) {
      alert("ошибка при получении пиццы");

      console.log(error, "ошибка приложения");
    } finally {
      setIsLoading(false);
    }
  };

  //

  useEffect(() => {
    window.scrollTo(0, 0);

    if (!isSearch.current) {
      fetchPizzas();
    }

    isSearch.current = false;
  }, [category, sort, searchValue, page]);

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
            : items
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
