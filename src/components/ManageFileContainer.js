import React, { useRef } from "react";
import { ManageFile } from "./ManageFile";
import { uploadData } from "../store/actions";
import Papa from "papaparse";
import { useDispatch, useSelector } from "react-redux";

export const ManageFileContainer = () => {
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
    <ManageFile
      onButtonClick={onButtonClick}
      onImportFile={onImportFile}
      onExportFile={onExportFile}
      inputFile={inputFile}
    />
  );
};
