import React, { useCallback, useContext, useRef, useState } from "react";
import styles from "./Search.module.scss";
import icon from "../../assets/img/search.svg";
import close from "../../assets/img/close.svg";
import { AppContext } from "../../App";
import debounce from "lodash.debounce";

const Search = () => {
  const [value, setValue] = useState("");
  const { setSearchValue } = useContext(AppContext);
  const inputPlace = useRef("input");

  const updSearchValue = useCallback(
    debounce((str) => {
      setSearchValue(str);
    }, 500),
    []
  );

  const onChangeValue = (e) => {
    setValue(e.target.value);
    updSearchValue(e.target.value);
  };

  return (
    <div className={styles.root}>
      <img src={icon} alt="search" className={styles.searchIcon} />
      <input
        ref={inputPlace}
        type="text"
        className={styles.input}
        placeholder="Введите название..."
        value={value}
        onChange={onChangeValue}
      />

      {value && (
        <img
          src={close}
          alt="search"
          className={styles.close}
          onClick={() => {
            setSearchValue("");
            setValue("");
            inputPlace.current.focus();
          }}
        />
      )}
    </div>
  );
};

export default Search;
