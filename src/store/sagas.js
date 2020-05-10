import axios from "axios";
import { call, fork, all, put, select, cancel } from "redux-saga/effects";
import MockAdapter from "axios-mock-adapter";
import { uploadMock } from "./actions";
import { uploadFileReducer } from "./reducers";

const mock = new MockAdapter(axios);

mock.onGet("./data").reply(200, [
  ["TransactionId", "Status", "Type", "ClientName", "Amount"],
  [
    ["1", "Pending", "Refill", "Abraham Justice", "$63.24"],
    ["2", "Completed", "Withdrawal", "Abraham Justice", "$63.24"],
    ["3", "Cancelled", "Refill", "Abraham Justice", "$63.24"],
    ["4", "Pending", "Withdrawal", "Abraham Justice", "$63.24"],
    ["5", "Completed", "Withdrawal", "Abraham Justice", "$63.24"],
    ["6", "Cancelled", "Refill", "Abraham Justice", "$63.24"],
  ],
]);

function* watchUploadMock() {
  const {
    upload: { filteredData },
  } = yield select();
  const { data } = yield call(axios.get, "./data");
  console.log(filteredData);
  if (filteredData === null) {
    yield put(uploadMock(data));
  }
}

export function* rootSaga() {
  yield all([fork(watchUploadMock)]);
}
