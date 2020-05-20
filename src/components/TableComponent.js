import React from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

export const TableComponent = ({
  tebleHeader,
  currentRows,
  openModalHandler,
  deleteTransactionHandler,
}) => {
  const renderTable = currentRows.map((row) => {
    return (
      <tr key={row.TransactionId}>
        <td>{row.TransactionId}</td>
        <td>{row.Status}</td>
        <td>{row.Type}</td>
        <td>{row.ClientName}</td>
        <td>{row.Amount}</td>
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
              <th>{Object.keys(tebleHeader[0])[0].slice(-2)}</th>
              <th>{Object.keys(tebleHeader[0])[1]}</th>
              <th>{Object.keys(tebleHeader[0])[2]}</th>
              <th>{Object.keys(tebleHeader[0])[3].replace(/([A-Z])/g, " $1")}</th>
              <th>{Object.keys(tebleHeader[0])[4]}</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{renderTable}</tbody>
        </Table>
      </div>
    </>
  );
};
