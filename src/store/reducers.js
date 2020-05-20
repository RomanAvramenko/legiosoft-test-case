import { combineReducers } from "redux";
import {
  UPLOAD_FILE,
  UPLOAD_MOCK,
  DELETE_TRANSACTION_SUCCESS,
  DELETE_TRANSACTION_CANCEL,
  MENU_STATUS_FILTER,
  MENU_TYPE_FILTER,
  PAGINATION_CURRENT_PAGE,
  MODAL_OPEN,
  MODAL_CLOSE,
  MODAL_OPTION,
  SAVE_TRANSACTION_CHANGES,
} from "./actionTypes";

const initialState = {
  uploaded: false,
  modifiedData: null,
};

const filterState = {
  statusFilter: "",
  typeFilter: "",
};

const pagesState = {
  currentPage: 1,
  pageSize: 15,
};

const modalState = {
  open: false,
  array: null,
  option: null,
};

export const uploadFileReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPLOAD_FILE:
      return {
        ...state,
        uploaded: true,
        modifiedData: action.payload,
      };
    case UPLOAD_MOCK:
      return {
        ...state,
        modifiedData: action.payload,
      };
    case DELETE_TRANSACTION_SUCCESS:
      return {
        ...state,
        modifiedData: [
          ...state.modifiedData.filter(
            (el) => el.TransactionId !== action.payload
          ),
        ],
      };
    case SAVE_TRANSACTION_CHANGES:
      return {
        ...state,
        modifiedData: [
          ...state.modifiedData.map((row) => {
            return row.TransactionId === action.array.TransactionId
              ? action.array
              : row;
          }),
        ],
      };
    case DELETE_TRANSACTION_CANCEL:
      return state;
    default:
      return state;
  }
};

const filterReducer = (state = filterState, action) => {
  switch (action.type) {
    case MENU_STATUS_FILTER:
      return {
        ...state,
        statusFilter: action.payload,
      };
    case MENU_TYPE_FILTER:
      return {
        ...state,
        typeFilter: action.payload,
      };
    default:
      return state;
  }
};

const paginationReducer = (state = pagesState, action) => {
  switch (action.type) {
    case PAGINATION_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };

    default:
      return state;
  }
};

const modalReducer = (state = modalState, action) => {
  switch (action.type) {
    case MODAL_OPEN:
      return {
        ...state,
        open: true,
        array: action.array,
        option: action.payload,
      };
    case MODAL_CLOSE:
      return {
        ...state,
        open: false,
      };
    case MODAL_OPTION:
      return {
        ...state,
        option: action.payload,
      };
    default:
      return state;
  }
};

export default combineReducers({
  upload: uploadFileReducer,
  filter: filterReducer,
  pagination: paginationReducer,
  modal: modalReducer,
});
