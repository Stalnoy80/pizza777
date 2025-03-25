import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import qs from "qs";
import { Link, useNavigate } from "react-router";
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import Pizzablock from "../components/PizzaBlock";
import Skeleton from "../components/PizzaBlock/Skeleton";
import Pagination from "./Pagination";
import {
  selectFilter,
  setFilters,
  setPageCount,
} from "../redux/slices/filterSlice";
import { fetchPizzas, selectPizza } from "../redux/slices/pizzaSlice";

const Home = () => {
  // const sortId = useSelector((state) => state.filterSlice.sort);
  // const [page, setPage] = useState(1);
  // const [sortActive, setSortActive] = useState(0);
  const sortList = ["rating", "-rating", "price", "-price", "title", "-title"];

  const { category, page, sort, searchValue } = useSelector(selectFilter);

  const { status, items } = useSelector(selectPizza);

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

  useEffect(() => {
    window.scrollTo(0, 0);

    if (!isSearch.current) {
    }

    isSearch.current = false;
  }, [category, sort, searchValue, page]);

  const getPizzas = async () => {
    dispatch(fetchPizzas({ category, sort, searchValue, page, sortedList }));
  };

  useEffect(() => {
    getPizzas();
  }, [category, sort, searchValue, page]);

  //

  const pizzas = items.map((obj, i) => <Pizzablock {...obj} key={i} />);
  const skeleton = [...new Array(7)].map((_, i) => <Skeleton key={i} />);

  return (
    <div className="content">
      <div className="container">
        <div className="content__top">
          <Categories />
          <Sort />
        </div>
        <h2 className="content__title">Все пиццы</h2>

        {status === "error" ? (
          <div>
            {" "}
            <div className="cart cart--empty">
              <h2>Проблема с загрузкой 😕</h2>
              <p>Попробуйте попозже.</p>
              <br />
              <Link to="/" className="button button--black">
                <span>Вернуться назад</span>
              </Link>
            </div>
          </div>
        ) : (
          <div className="content__items">
            {status === "loading" ? skeleton : pizzas}
          </div>
        )}
      </div>
      <Pagination
        value={page}
        onChangePage={(num) => dispatch(setPageCount(num))}
      />
    </div>
  );
};

export default Home;
