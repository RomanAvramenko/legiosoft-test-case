import React from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import {
  modalClose,
  modalOption,
  saveTransactionChanges,
} from "../store/actions";

export const ModalForm = () => {
  const dispatch = useDispatch();
  const { option, array } = useSelector((state) => state.modal);

  const optionHandler = (e) => {
    dispatch(modalOption(e.target.value));
  };

  const saveButtonHandler = () => {
    const editedArray = array.splice(1, 1, option);
    dispatch(saveTransactionChanges(editedArray, option));
    dispatch(modalClose());
  };
  return (
    <>
      <div className="ModalForm">
        <Modal.Dialog>
          <Modal.Header>
            <Modal.Title>Change status of transaction.</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              {["Pending", "Completed", "Cancelled"].map((value, index) => {
                return (
                  <Form.Check
                    key={index}
                    type="radio"
                    label={`${value}`}
                    value={`${value}`}
                    checked={option === value}
                    onChange={optionHandler}
                  />
                );
              })}
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => dispatch(modalClose())}>
              Close
            </Button>
            <Button variant="primary" onClick={saveButtonHandler}>
              Save
            </Button>
          </Modal.Footer>
        </Modal.Dialog>
      </div>
      <div className="ModalBackdrop"></div>
    </>
  );
};
