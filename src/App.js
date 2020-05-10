import React from "react";
import { FilterMenu } from "./components/FilterMenu";
import "./App.scss";
import { ManageFile } from "./components/ManageFile";
import { TableComponent } from "./components/TableComponent";
import { useSelector } from "react-redux";

export const App = () => {
  const { filteredData } = useSelector((state) => state.upload);
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
