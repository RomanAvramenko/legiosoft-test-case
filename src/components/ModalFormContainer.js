import React from "react";
import { ModalForm } from "./ModalForm";
import {
  modalClose,
  saveTransactionChanges,
  modalOption,
} from "../store/actions";
import { useSelector, useDispatch } from "react-redux";

export const ModalFormContainer = () => {
  const dispatch = useDispatch();
  const { option, array } = useSelector((state) => state.modal);

  const optionHandler = (e) => {
    dispatch(modalOption(e.target.value));
  };

  const saveButtonHandler = () => {
    array.Status = option;
    dispatch(saveTransactionChanges(array.Status, option));
    dispatch(modalClose());
  };

  const cancelButtonHandler = () => {
    dispatch(modalClose());
  };

  return (
    <div>
      <ModalForm
        option={option}
        optionHandler={optionHandler}
        saveButtonHandler={saveButtonHandler}
        cancelButtonHandler={cancelButtonHandler}
      />
    </div>
  );
};
