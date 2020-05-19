import { createSelector } from "reselect";

const getAllArray = (state) => state.upload.modifiedData;
const getStatus = (state) => state.filter.statusFilter;
const getType = (state) => state.filter.typeFilter;

export const selectStatusFilter = createSelector(
  [getAllArray, getStatus],
  (allArr, status) => allArr.filter((row) => row[1] === status)
);

export const selectTypeFilter = createSelector(
  [getAllArray, getType],
  (allArr, type) => allArr.filter((row) => row[2] === type)
);

export const composedSelector = createSelector(
  [getAllArray, getStatus, getType],
  (allArr, status, type) =>
    allArr.filter((row) => row[1] === status).filter((row) => row[2] === type)
);