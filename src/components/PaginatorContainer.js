import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { paginationCurrentPage } from "../store/actions";
import { Paginator } from "./Paginator";
import Pagination from "react-bootstrap/Pagination";

export const PaginatorContainer = ({currentData}) => {
  const dispatch = useDispatch();
  const {
    pagination: { currentPage, pageSize },
  } = useSelector((state) => state);

  const pagesCount = Math.ceil(currentData().length / pageSize);
  const pageHandler = (num) => {
    dispatch(paginationCurrentPage(num));
  };

  const prevPageHandler = () => {
    if (currentPage > 1) {
      dispatch(paginationCurrentPage(currentPage - 1));
    }
  };

  const nextPageHandler = () => {
    if (currentPage < pagesCount) {
      dispatch(paginationCurrentPage(currentPage + 1));
    }
  };

  let items = [];
  for (let number = 1; number <= pagesCount; number++) {
    items.push(
      <Pagination.Item
        key={number}
        active={number === currentPage}
        onClick={() => pageHandler(number)}
      >
        {number}
      </Pagination.Item>
    );
  }
  return (
    <Paginator
      prevPageHandler={prevPageHandler}
      nextPageHandler={nextPageHandler}
      items={items}
    />
  );
};
