import React, { useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

const EquipoContainer = (props) => {
  const [products, setProducts] = useState([
    { id: "0", Empresa: "tata", ciudad: "GDL", FechaDeCaptura: "16/05/2023" },
    { id: "1", Empresa: "TCS", ciudad: "CDMX", FechaDeCaptura: "16/05/2023" },
    { id: "2", Empresa: "USAA", ciudad: "MTY", FechaDeCaptura: "16/05/2023" },
  ]);
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
        <Column field="id" header="Code" sortable></Column>
        <Column field="Empresa" header="Name" sortable></Column>
        <Column field="ciudad" header="Category" sortable></Column>
        <Column field="FechaDeCaptura" header="Quantity" sortable></Column>
      </DataTable>
    </div>
  );
};

export default EquipoContainer;
