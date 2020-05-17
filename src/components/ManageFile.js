import React from "react";
import Button from "react-bootstrap/Button";

export const ManageFile = ({onButtonClick, onExportFile, onImportFile, inputFile}) => {
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
