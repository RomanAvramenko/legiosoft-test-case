import React from "react";
import { TableComponent } from "./TableComponent";
import { useSelector, useDispatch } from "react-redux";
import { modalOpen, deleteTransaction } from "../store/actions";

export const TableContainer = () => {
  const dispatch = useDispatch();

  const {
    upload: { tebleHeader, filteredData },
    pagination: { currentPage, pageSize },
  } = useSelector((state) => state);

  //Get Current Table Row
  const indexOfLastRow = currentPage * pageSize;
  const indexOfFirstRow = indexOfLastRow - pageSize;
  const currentRows = filteredData.slice(indexOfFirstRow, indexOfLastRow);

  const openModalHandler = (row) => {
    dispatch(modalOpen(row, row[1]));
  };

  const deleteTransactionHandler = (row) => {
    dispatch(deleteTransaction(row[0]));
  };

  return (
    <TableComponent
      currentRows={currentRows}
      tebleHeader={tebleHeader}
      openModalHandler={openModalHandler}
      deleteTransactionHandler={deleteTransactionHandler}
    />
  );
};
