import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { category, setCategory } from "../redux/slices/filterSlice";

const Categories = () => {
  const categories = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];

  const dispatch = useDispatch();
  const categoryId = useSelector((state) => state.filterSlice.category);

  return (
    <div className="categories">
      <ul>
        {categories.map((cat, id) => (
          <li
            onClick={() => dispatch(setCategory(id))}
            className={categoryId === id ? "active " : ""}
            key={id}
          >
            {cat}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Categories;
