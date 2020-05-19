import { createSelector } from "reselect";

const array = (state) => state.upload.modifiedData;
const status = (state) => state.filter.statusFilter;
const type = (state) => state.filter.typeFilter;

export const selectStatusFilter = createSelector(
  [array, status],
  (allArr, status) => allArr.filter((row) => row[1] === status)
);

export const selectTypeFilter = createSelector(
  [array, type],
  (allArr, type) => allArr.filter((row) => row[2] === type)
);

export const composedSelector = createSelector(
  [array, status, type],
  (allArr, status, type) =>
    allArr.filter((row) => row[1] === status).filter((row) => row[2] === type)
  );