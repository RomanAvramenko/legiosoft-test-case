import axios from "axios";
import { call, fork, all, put, takeEvery } from "redux-saga/effects";
import MockAdapter from "axios-mock-adapter";
import { uploadMock } from "./actions";
import { LOAD_MOCK } from "./actionTypes";

const mock = new MockAdapter(axios);

mock.onGet("./data").reply(200, [
  {
    TransactionId: "1",
    Status: "Pending",
    Type: "Withdrawal",
    ClientName: "Dale Cotton",
    Amount: "$28.43",
  },
  {
    TransactionId: "2",
    Status: "Completed",
    Type: "Refill",
    ClientName: "Paul Carter",
    Amount: "$45.16",
  },
  {
    TransactionId: "3",
    Status: "Cancelled",
    Type: "Refill",
    ClientName: "Caldwell Reid",
    Amount: "$63.00",
  },
  {
    TransactionId: "4",
    Status: "Cancelled",
    Type: "Refill",
    ClientName: "Quentin Bonner",
    Amount: "$64.52",
  },
  {
    TransactionId: "5",
    Status: "Cancelled",
    Type: "Withdrawal",
    ClientName: "Colt Joyce",
    Amount: "$70.67",
  },
  {
    TransactionId: "6",
    Status: "Completed",
    Type: "Refill",
    ClientName: "Neil Walls",
    Amount: "$99.36",
  },
  {
    TransactionId: "7",
    Status: "Completed",
    Type: "Refill",
    ClientName: "Slade Rios",
    Amount: "$52.60",
  },
  {
    TransactionId: "8",
    Status: "Cancelled",
    Type: "Withdrawal",
    ClientName: "Graham Harrell",
    Amount: "$47.51",
  },
  {
    TransactionId: "9",
    Status: "Completed",
    Type: "Withdrawal",
    ClientName: "Kirk Byers",
    Amount: "$96.35",
  },
  {
    TransactionId: "10",
    Status: "Cancelled",
    Type: "Withdrawal",
    ClientName: "Holmes Howell",
    Amount: "$93.81",
  },
  {
    TransactionId: "11",
    Status: "Cancelled",
    Type: "Refill",
    ClientName: "Flynn Whitley",
    Amount: "$95.75",
  },
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
