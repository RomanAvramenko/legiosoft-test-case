import React from "react";
import Form from "react-bootstrap/Form";

export const FilterMenu = ({ handleStatus, handleType }) => {
  return (
    <div className="Dropdown">
      <Form>
        <Form.Group controlId="exampleForm.SelectCustom">
          <Form.Label>Status</Form.Label>
          <Form.Control as="select" custom onChange={handleStatus}>
            <option></option>
            <option>Pending</option>
            <option>Completed</option>
            <option>Cancelled</option>
          </Form.Control>
        </Form.Group>
      </Form>
      <Form>
        <Form.Group controlId="exampleForm.SelectCustom">
          <Form.Label>Type</Form.Label>
          <Form.Control as="select" custom onChange={handleType}>
            <option></option>
            <option>Refill</option>
            <option>Withdrawal</option>
          </Form.Control>
        </Form.Group>
      </Form>
    </div>
  );
};
