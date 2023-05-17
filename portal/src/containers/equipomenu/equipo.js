import React, { useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import "primeicons/primeicons.css";
const EquipoContainer = (props) => {
  const { handlePrintRow, handleButtonClick } = props;
  const [products, setProducts] = useState([
    { id: "0", Empresa: "tata", ciudad: "GDL", FechaDeCaptura: "16/05/2023" },
    { id: "1", Empresa: "TCS", ciudad: "CDMX", FechaDeCaptura: "16/05/2023" },
    { id: "2", Empresa: "USAA", ciudad: "MTY", FechaDeCaptura: "16/05/2023" },
  ]);

  const rowButtonTemplate = (rowData) => {
    return (
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Button
          icon="pi pi-search"
          onClick={() => handlePrintRow(rowData)}
          style={{
            backgroundColor: "#fcba03",
            border: "#6366f100",
            margin: "0px",
          }}
        />
        <Button
          icon="pi pi-pencil"
          onClick={() => handlePrintRow(rowData)}
          label="Firmar"
          style={{
            marginLeft: "10px",
            backgroundColor: "#fc4103",
            border: "#6366f100",
          }}
        />
      </div>
    );
  };

  const headerButtonTemplate = (
    <Button icon="pi pi-refresh" onClick={handleButtonClick} />
  );
  return (
    <div>
      <DataTable
        value={products}
        paginator
        rows={5}
        tableStyle={{ minWidth: "50rem", maxHeight: "40rem" }}
        stripedRows
        removableSort
      >
        <Column
          field="id"
          header="ID"
          sortable
          style={{ width: "150px" }}
        ></Column>
        <Column
          field="Empresa"
          header="Empresa"
          sortable
          style={{ width: "150px" }}
        ></Column>
        <Column
          field="ciudad"
          header="Ciudad"
          sortable
          style={{ width: "100px" }}
        ></Column>
        <Column
          field="FechaDeCaptura"
          header="Fecha"
          sortable
          style={{ width: "100px" }}
        ></Column>
        <Column
          body={rowButtonTemplate}
          style={{ width: "3rem", textAlign: "center" }}
        />
        <Column
          header={headerButtonTemplate}
          style={{ width: "1rem", textAlign: "center" }}
        />
      </DataTable>
    </div>
  );
};

export default EquipoContainer;
