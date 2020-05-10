import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Pagination from "react-bootstrap/Pagination";
import { paginationCurrentPage } from "../store/actions";

export const Paginator = () => {
  const dispatch = useDispatch();
  const {
    upload: { filteredData },
    pagination: { currentPage, pageSize },
  } = useSelector((state) => state);

  const pagesCount = Math.ceil(filteredData.length / pageSize);
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
    <Pagination>
      <Pagination.Prev onClick={prevPageHandler} />
      {items}
      <Pagination.Next onClick={nextPageHandler} />
    </Pagination>
  );
};
