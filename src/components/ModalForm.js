import React from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export const ModalForm = ({
  option,
  optionHandler,
  saveButtonHandler,
  cancelButtonHandler,
}) => {

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
            <Button variant="secondary" onClick={cancelButtonHandler}>
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
