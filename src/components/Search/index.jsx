import React, { useCallback, useRef, useState } from "react";
import styles from "./Search.module.scss";
import icon from "../../assets/img/search.svg";
import close from "../../assets/img/close.svg";
import debounce from "lodash.debounce";
import { useDispatch } from "react-redux";
import { setSearchValue } from "../../redux/slices/filterSlice";

const Search = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  const inputPlace = useRef("input");

  const onClickClear = () => {
    dispatch(setSearchValue(""));
    setValue("");
    inputPlace.current.focus();
  };

  const updSearchValue = useCallback(
    debounce((str) => {
      dispatch(setSearchValue(str));
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
          onClick={onClickClear}
        />
      )}
    </div>
  );
};

export default Search;
