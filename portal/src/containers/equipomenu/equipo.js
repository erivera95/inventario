import React, { useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { Dialog } from 'primereact/dialog';
import "primeicons/primeicons.css";
import EquiposForm from "../equiposForm";

const EquipoContainer = (props) => {
  const { handlePrintRow,
    handleButtonClick,
    products,
    handleOnClickAdd,

    //Modal
    modalFormVisible,
    handleCloseModal
  } = props;


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
    <div style={{ display: "flex", direction: "column" }}>
      <Button icon="pi pi-refresh" onClick={handleButtonClick} />
      <Button icon="pi pi-plus" severity="danger" onClick={handleOnClickAdd} />
    </div>
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

      <Dialog class="modal"
        visible={modalFormVisible}
        closable={false}
        style={{
          width: '90vw',
          backgroundColor: "#FFFFFF",
          alignContent: 'center',
          justifyContent: 'center',
          display: 'flex',
          padding: '15px'
        }}
        modal
        onHide={handleCloseModal}>
        <p className="m-0">
          <Button
            style={{
              position: "absolute",
              top: "22vh",
              right: "4vw",
              margin: "0",
              padding: "8px 12px",
              backgroundColor: "red",
              border: "none",
              cursor: "pointer",
            }} onClick={handleCloseModal}>X</Button>
          <EquiposForm />
        </p>
      </Dialog>
    </div>
  );
};

export default EquipoContainer;
