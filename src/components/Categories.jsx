import React from "react";

const Categories = ({ category, setCategory }) => {
  const categories = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];

  return (
    <div className="categories">
      <ul>
        {categories.map((cat, id) => (
          <li
            onClick={() => setCategory(id)}
            className={category === id ? "active " : ""}
            key={id}
          >
            {cat}
          </li>
        ))}
      </ul>
    </div>
  );

  // <div className="categories">
  //   <ul>
  //     <li
  //       onClick={() => onChangeCategory(0)}
  //       className={category === 0 ? "active " : ""}
  //     >
  //       Все
  //     </li>
  //     <li
  //       onClick={() => onChangeCategory(1)}
  //       className={category === 1 ? "active " : ""}
  //     >
  //       Мясные
  //     </li>
  //     <li
  //       onClick={() => onChangeCategory(2)}
  //       className={category === 2 ? "active " : ""}
  //     >
  //       Вегетарианская
  //     </li>
  //     <li
  //       onClick={() => onChangeCategory(3)}
  //       className={category === 3 ? "active " : ""}
  //     >
  //       Гриль
  //     </li>
  //     <li
  //       onClick={() => onChangeCategory(4)}
  //       className={category === 4 ? "active " : ""}
  //     >
  //       Острые
  //     </li>
  //     <li
  //       onClick={() => onChangeCategory(5)}
  //       className={category === 5 ? "active " : ""}
  //     >
  //       Закрытые
  //     </li>
  //   </ul>
  // </div>
};

export default Categories;
