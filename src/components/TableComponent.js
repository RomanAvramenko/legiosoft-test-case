import React from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { PaginatorContainer } from "./PaginatorContainer";

export const TableComponent = ({
  tebleHeader,
  currentRows,
  openModalHandler,
  deleteTransactionHandler,
}) => {

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
            onClick={() => openModalHandler(row)}
          >
            Edit
          </Button>
          <Button
            variant="light"
            className="Table__btn"
            onClick={() => deleteTransactionHandler(row)}
          >
            Delete
          </Button>
        </td>
      </tr>
    );
  });

  return (
    <>
      <div className="Table">
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
        <PaginatorContainer />
      </div>
    </>
  );
};
