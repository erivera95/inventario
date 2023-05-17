import React from "react";
import EquipoContainer from "./equipo";

function EquipoMenu() {
  const handlePrintRow = (rowData) => {
    console.log(rowData);
  };
  return (
    <div>
      <EquipoContainer handlePrintRow={handlePrintRow} />
    </div>
  );
}

export default EquipoMenu;
