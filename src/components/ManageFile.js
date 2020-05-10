import React, { useRef } from "react";
import Button from "react-bootstrap/Button";
import Papa from "papaparse";
import { useDispatch, useSelector } from "react-redux";
import { uploadData } from "../store/actions";

export const ManageFile = () => {
  const dispatch = useDispatch();
  const { filteredData } = useSelector((state) => state.upload);

  const inputFile = useRef(null);
  const onButtonClick = () => {
    inputFile.current.click();
  };

  const onImportFile = (event) => {
    Papa.parse(event.target.files[0], {
      complete: (results) => {
        dispatch(uploadData(results.data));
      },
    });
  };

  const onExportFile = () => {
    if (filteredData) {
      const hiddenElement = document.createElement("a");
      hiddenElement.href =
        "data:text/csv;charset=utf-8," + encodeURI(Papa.unparse(filteredData));
      hiddenElement.target = "_blank";
      hiddenElement.download = "transactions.csv";
      hiddenElement.click();
    }
  };

  return (
    <div>
      <Button variant="light" onClick={onButtonClick}>
        Import
      </Button>
      <Button variant="light" onClick={onExportFile}>
        Export
      </Button>
      <input
        type="file"
        id="file"
        ref={inputFile}
        style={{ display: "none" }}
        onChange={onImportFile}
      />
    </div>
  );
};
