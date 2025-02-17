import React, { useContext } from "react";
import styles from "./Search.module.scss";
import icon from "../../assets/img/search.svg";
import close from "../../assets/img/close.svg";
import { AppContext } from "../../App";

const Search = () => {
  const { searchValue, setSearchValue } = useContext(AppContext);
  return (
    <div className={styles.root}>
      <img src={icon} alt="search" className={styles.searchIcon} />
      <input
        type="text"
        className={styles.input}
        placeholder="Введите название..."
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />

      {searchValue && (
        <img
          src={close}
          alt="search"
          className={styles.close}
          onClick={() => setSearchValue("")}
        />
      )}
    </div>
  );
};

export default Search;
