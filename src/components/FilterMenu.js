import React, { useEffect } from "react";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import {
  statusMenuFilter,
  typeMenuFilter,
  paginationCurrentPage,
  menuFilter,
} from "../store/actions";

export const FilterMenu = () => {
  const {
    filter: { statusFilter, typeFilter },
    upload: { modifiedData },
  } = useSelector((state) => state);
  const dispatch = useDispatch();
  const handleStatus = (e) => {
    dispatch(statusMenuFilter(e.target.value));
    dispatch(paginationCurrentPage(1));
  };

  const handleType = (e) => {
    dispatch(typeMenuFilter(e.target.value));
    dispatch(paginationCurrentPage(1));
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
