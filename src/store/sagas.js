import axios from "axios";
import { call, fork, all, put, takeEvery } from "redux-saga/effects";
import MockAdapter from "axios-mock-adapter";
import { uploadMock } from "./actions";
import { LOAD_MOCK } from "./actionTypes";

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
  yield takeEvery(LOAD_MOCK, workerUploadMock);
}

function* workerUploadMock() {
  const { data } = yield call(axios.get, "./data");
  yield put(uploadMock(data));
}

export function* rootSaga() {
  yield all([fork(watchUploadMock)]);
}
