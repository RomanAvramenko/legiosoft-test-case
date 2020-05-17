import React from "react";
import Pagination from "react-bootstrap/Pagination";

export const Paginator = ({ prevPageHandler, nextPageHandler, items }) => {
  return (
    <Pagination>
      <Pagination.Prev onClick={prevPageHandler} />
      {items}
      <Pagination.Next onClick={nextPageHandler} />
    </Pagination>
  );
};
