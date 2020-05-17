import React, { useEffect } from "react";
import { FilterMenu } from "./FilterMenu";
import { useSelector, useDispatch } from "react-redux";
import {
  statusMenuFilter,
  paginationCurrentPage,
  typeMenuFilter,
  menuFilter,
} from "../store/actions";

export const FilterMenuContainer = () => {
  const dispatch = useDispatch();

  const {
    filter: { statusFilter, typeFilter },
    upload: { modifiedData },
  } = useSelector((state) => state);

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
    let filteredArray = [];
    if (statusFilter !== "" && typeFilter === "") {
      //status filter
      filteredArray.push(modifiedData.filter((row) => row[1] === statusFilter));
    } else if (typeFilter !== "" && statusFilter === "") {
      //type filter
      filteredArray.push(modifiedData.filter((row) => row[2] === typeFilter));
    } else if (statusFilter !== "" && typeFilter !== "") {
      //both filters
      filteredArray.push(
        modifiedData
          .filter((row) => row[1] === statusFilter)
          .filter((row) => row[2] === typeFilter)
      );
    } else {
      //no filtes
      filteredArray.push(modifiedData);
    }
    dispatch(menuFilter(filteredArray[0]));
    // eslint-disable-next-line
  }, [modifiedData, statusFilter, typeFilter]);
  return <FilterMenu handleStatus={handleStatus} handleType={handleType} />;
};
