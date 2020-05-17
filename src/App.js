import React, { useEffect } from "react";
import "./App.scss";
import { useSelector, useDispatch } from "react-redux";
import { loadMock } from "./store/actions";
import { ModalFormContainer } from "./components/ModalFormContainer";
import { TableContainer } from "./components/TableContainer";
import { ManageFileContainer } from "./components/ManageFileContainer";
import { FilterMenuContainer } from "./components/FilterMenuContainer";

export const App = () => {
  const dispatch = useDispatch();

  const {
    upload: { filteredData, modifiedData },
    modal: { open },
  } = useSelector((state) => state);

  useEffect(() => {
    if (filteredData === null && modifiedData === null) {
      dispatch(loadMock());
    }
    // eslint-disable-next-line
  }, []);

  return (
    <div className="App">
      <div className="App__options">
        <FilterMenuContainer />
        <ManageFileContainer />
      </div>
      {open && <ModalFormContainer />}
      {filteredData && <TableContainer />}
    </div>
  );
};
