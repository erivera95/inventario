import React from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { Dialog } from 'primereact/dialog';
import "primeicons/primeicons.css";
import EquiposForm from "../equiposForm";
import Firma from "../../components/modales/firma";
import Informacion from "../../components/modales/informacion";
import Confirmacion from "../../components/modales/confirmacion";

const EquipoContainer = (props) => {
  const {
    handleReload,
    products,
    handleOnClickAdd,

    //Modal agregar
    modalFormVisible,
    handleCloseModal,
    handleAgregar,

    //Modal firma
    modalSignature,
    handleOnSignature,
    handleFirmaGuardada,

    //Modal informacion
    handleInformation,
    informacion,
    modalInformacion,

    modalConfirmation,
    

  } = props;





  const rowButtonTemplate = (rowData) => {
    const hasFirma = rowData.Firma==='undefined'||!rowData.Firma;
    return (
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Button
          icon="pi pi-search"
          onClick={() => handleInformation(rowData)}
          style={{
            backgroundColor: "#fcba03",
            border: "#6366f100",
            margin: "0px",
          }}
        />

        {hasFirma && (
          <Button
            icon="pi pi-pencil"
            onClick={() => handleOnSignature(rowData)}
            label="Firmar"
            style={{
              marginLeft: "10px",
              backgroundColor: "#fc4103",
              border: "#6366f100",
            }}
          />
        )}
      </div>
    );
  };

  const headerButtonTemplate = (
    <div style={{ display: "flex", direction: "column" }}>
      <Button icon="pi pi-refresh" onClick={handleReload} />
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
          field="ID"
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
          field="Ciudad"
          header="Ciudad"
          sortable
          style={{ width: "100px" }}
        ></Column>
        <Column
          field="Fecha"
          header="Fecha"
          sortable
          style={{ width: "100px" }}
          body={(rowData) => new Date(rowData.Fecha).toLocaleDateString()}
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


      {/* Modal agregar*/}
      <Dialog
        class="modal"
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
          <EquiposForm Datos={handleAgregar}/>
        </p>
      </Dialog>

      {/* Modal Firma */}
      <Dialog
        class="modal"
        visible={modalSignature}
        closable={false}
        style={{
          width: '45vw',
          backgroundColor: "#FFFFFF",
          alignContent: 'center',
          justifyContent: 'center',
          display: 'flex',
          padding: '15px'
        }}
        modal
      >
        <p className="m-0">
          <Firma onFirmaGuardada={handleFirmaGuardada} />
        </p>
      </Dialog>

      {/*Modal informacion*/}
      <Dialog
        class="modal"
        visible={modalInformacion}
        closable={false}
        style={{
          width: '50vw',
          backgroundColor: "#FFFFFF",
          alignContent: 'center',
          justifyContent: 'center',
          display: 'flex',
          padding: '15px',
          borderRadius: '15px',
        }}
        modal
      >
        <Informacion informacion={informacion} />
        <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '14px' }}>
          <Button onClick={handleCloseModal}>Cerrar</Button>

        </div>
      </Dialog>

      {/*Modal informacion*/}
      <Dialog
        class="modal"
        visible={modalConfirmation}
        style={{
          width: '50vw',
          backgroundColor: "#FFFFFF",
          alignContent: 'center',
          justifyContent: 'center',
          display: 'flex',
          padding: '15px',
          borderRadius: '15px',
        }}
        modal
        closable={false}
      >
      <Confirmacion/>
      <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '14px' }}>
          <Button onClick={handleCloseModal}>No</Button>
          <Button onClick={handleCloseModal}>Si</Button>

        </div>
      </Dialog>
    </div>
  );
};

export default EquipoContainer;
