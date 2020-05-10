import React, { useEffect } from "react";
import { FilterMenu } from "./components/FilterMenu";
import "./App.scss";
import { ManageFile } from "./components/ManageFile";
import { TableComponent } from "./components/TableComponent";
import { useSelector, useDispatch } from "react-redux";
import { loadMock } from "./store/actions";

export const App = () => {
  const dispatch = useDispatch();
  const { filteredData, modifiedData } = useSelector((state) => state.upload);
  useEffect(() => {
    if (filteredData === null && modifiedData === null) {
      dispatch(loadMock());
    }
    // eslint-disable-next-line
  }, []);
  return (
    <div className="App">
      <div className="App__options">
        <FilterMenu />
        <ManageFile />
      </div>
      {filteredData && <TableComponent />}
    </div>
  );
};
