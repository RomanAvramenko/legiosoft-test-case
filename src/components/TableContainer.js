import React from "react";
import { TableComponent } from "./TableComponent";
import { useSelector, useDispatch } from "react-redux";
import { modalOpen, deleteTransaction } from "../store/actions";
import {
  selectTypeFilter,
  selectStatusFilter,
  composedSelector,
} from "../store/selectors";
import { PaginatorContainer } from "./PaginatorContainer";

export const TableContainer = () => {
  const dispatch = useDispatch();

  const {
    filter: { statusFilter, typeFilter },
    upload: { modifiedData },
    pagination: { currentPage, pageSize },
  } = useSelector((state) => state);

  const statusFilterArr = useSelector(selectStatusFilter);
  const typeFilterArr = useSelector(selectTypeFilter);
  const bothFilterArr = useSelector(composedSelector);
  const currentData = () => {
    if (statusFilter !== "" && typeFilter === "") {
      //status filter
      return statusFilterArr;
    } else if (typeFilter !== "" && statusFilter === "") {
      //type filter
      return typeFilterArr;
    } else if (statusFilter !== "" && typeFilter !== "") {
      //both filters
      return bothFilterArr;
    } else {
      //no filtes
      return modifiedData;
    }
  };

  //Get Current Table Row
  const indexOfLastRow = currentPage * pageSize;
  const indexOfFirstRow = indexOfLastRow - pageSize;
  const currentRows = currentData().slice(indexOfFirstRow, indexOfLastRow);

  const openModalHandler = (row) => {
    dispatch(modalOpen(row, row.Status));
  };

  const deleteTransactionHandler = (row) => {
    dispatch(deleteTransaction(row.TransactionId));
  };

  return (
    <>
      <TableComponent
        currentRows={currentRows}
        tebleHeader={modifiedData}
        openModalHandler={openModalHandler}
        deleteTransactionHandler={deleteTransactionHandler}
      />
      <PaginatorContainer currentData={currentData} />
    </>
  );
};
