import React from "react";
import { FilterMenu } from "./FilterMenu";
import { useSelector, useDispatch } from "react-redux";
import {
  statusMenuFilter,
  paginationCurrentPage,
  typeMenuFilter,
} from "../store/actions";

export const FilterMenuContainer = () => {
  const dispatch = useDispatch();

  const { modifiedData } = useSelector((state) => state.upload);

  const handleStatus = (e) => {
    if (modifiedData) {
      dispatch(statusMenuFilter(e.target.value));
      dispatch(paginationCurrentPage(1));
    }
  };

  const handleType = (e) => {
    if (modifiedData) {
      dispatch(typeMenuFilter(e.target.value));
      dispatch(paginationCurrentPage(1));
    }
  };

  return <FilterMenu handleStatus={handleStatus} handleType={handleType} />;
};
