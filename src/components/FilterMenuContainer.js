import React, { useEffect } from "react";
import { FilterMenu } from "./FilterMenu";
import { useSelector, useDispatch } from "react-redux";
import {
  statusMenuFilter,
  paginationCurrentPage,
  typeMenuFilter,
  menuFilter,
} from "../store/actions";
import {
  selectTypeFilter,
  selectStatusFilter,
  composedSelector,
} from "../store/selectors";

export const FilterMenuContainer = () => {
  const dispatch = useDispatch();

  const {
    filter: { statusFilter, typeFilter },
    upload: { modifiedData },
  } = useSelector((state) => state);
  const statusFilterArr = useSelector(selectStatusFilter);
  const typeFilterArr = useSelector(selectTypeFilter);
  const bothFilterArr = useSelector(composedSelector);

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

  useEffect(() => {
    if (statusFilter !== "" && typeFilter === "") {
      //status filter
      dispatch(menuFilter(statusFilterArr));
    } else if (typeFilter !== "" && statusFilter === "") {
      //type filter
      dispatch(menuFilter(typeFilterArr));
    } else if (statusFilter !== "" && typeFilter !== "") {
      //both filters
      dispatch(menuFilter(bothFilterArr));
    } else {
      //no filtes
      dispatch(menuFilter(modifiedData));
    }
    // eslint-disable-next-line
  }, [modifiedData, statusFilter, typeFilter]);
  return <FilterMenu handleStatus={handleStatus} handleType={handleType} />;
};
