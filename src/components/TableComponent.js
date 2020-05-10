import React from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { useSelector, useDispatch } from "react-redux";
import { deleteTransaction, modalOpen } from "../store/actions";
import { Paginator } from "./Paginator";
import { ModalForm } from "./ModalForm";

export const TableComponent = () => {
  const {
    upload: { tebleHeader, filteredData },
    pagination: { currentPage, pageSize },
    modal: { open },
  } = useSelector((state) => state);
  const dispatch = useDispatch();
  //Get Current Table Row
  const indexOfLastRow = currentPage * pageSize;
  const indexOfFirstRow = indexOfLastRow - pageSize;
  const currentRows = filteredData.slice(indexOfFirstRow, indexOfLastRow);
  const renderTable = currentRows.map((row) => {
    return (
      <tr key={row[0]}>
        {row.map((item, index) => {
          return <td key={index}>{item}</td>;
        })}
        <td>
          <Button
            variant="primary"
            className="Table__btn"
            onClick={() => dispatch(modalOpen(row, row[1]))}
          >
            Edit
          </Button>
          <Button
            variant="light"
            className="Table__btn"
            onClick={() => dispatch(deleteTransaction(row[0]))}
          >
            Delete
          </Button>
        </td>
      </tr>
    );
  });

  return (
    <>
      {open && <ModalForm />}
      <div className="Table">
        {filteredData && (
          <Table striped bordered hover size="sm" className="Table__rows">
            <thead>
              <tr>
                <th>{tebleHeader[0].slice(-2)}</th>
                <th>{tebleHeader[1]}</th>
                <th>{tebleHeader[2]}</th>
                <th>{tebleHeader[3].replace(/([A-Z])/g, " $1")}</th>
                <th>{tebleHeader[4]}</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>{renderTable}</tbody>
          </Table>
        )}
        <Paginator />
      </div>
    </>
  );
};
