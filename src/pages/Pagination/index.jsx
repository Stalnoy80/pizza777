import React from "react";
import ReactPaginate from "react-paginate";
import styles from "./styles.module.scss";

const Pagination = ({ onChangePage, totalPage }) => {
  console.log(totalPage);

  return (
    <ReactPaginate
      className={styles.root}
      breakLabel="..."
      nextLabel=">"
      previousLabel="<"
      onPageChange={(event) => onChangePage(event.selected + 1)}
      pageRangeDisplayed={4}
      pageCount={3}
      renderOnZeroPageCount={null}
    />
  );
};

export default Pagination;
