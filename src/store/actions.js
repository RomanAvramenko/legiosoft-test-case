import {
  UPLOAD_FILE_SUCCESS,
  DELETE_TRANSACTION_CANCEL,
  DELETE_TRANSACTION_SUCCESS,
  MENU_STATUS_FILTER,
  MENU_TYPE_FILTER,
  MENU_FILTER,
  PAGINATION_CURRENT_PAGE,
  PAGINATION_PAGE_SIZE,
  MODAL_OPEN,
  MODAL_CLOSE,
  MODAL_OPTION,
  SAVE_TRANSACTION_CHANGES,
} from "./actionTypes";

export const uploadData = (data) => {
  return {
    type: UPLOAD_FILE_SUCCESS,
    tebleHeader: data[0],
    payload: data.filter((i, index) => index !== 0),
  };
};

export const deleteTransaction = (id) => {
  if (window.confirm("Do you really want to delete this transaction?")) {
    return {
      type: DELETE_TRANSACTION_SUCCESS,
      payload: id,
    };
  } else {
    return {
      type: DELETE_TRANSACTION_CANCEL,
    };
  }
};

export const saveTransactionChanges = (array, option) => {
  return {
    type: SAVE_TRANSACTION_CHANGES,
    array: array,
    payload: option,
  };
};

export const statusMenuFilter = (param) => {
  return {
    type: MENU_STATUS_FILTER,
    payload: param,
  };
};

export const menuFilter = (array) => {
  return {
    type: MENU_FILTER,
    payload: array,
  };
};

export const typeMenuFilter = (param) => {
  return {
    type: MENU_TYPE_FILTER,
    payload: param,
  };
};

export const paginationCurrentPage = (number) => {
  return {
    type: PAGINATION_CURRENT_PAGE,
    payload: number,
  };
};

export const paginationPageSize = () => {
  return {
    type: PAGINATION_PAGE_SIZE,
  };
};

export const modalOpen = (array, option) => {
  return {
    type: MODAL_OPEN,
    array: array,
    payload: option,
  };
};

export const modalClose = () => {
  return {
    type: MODAL_CLOSE,
  };
};

export const modalOption = (option) => {
  return {
    type: MODAL_OPTION,
    payload: option,
  };
};
