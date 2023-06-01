import React, { useState } from "react";
import EquipoContainer from "./equipo";

function EquipoMenu() {
  const [products, setProducts] = useState([
    { id: "0", Empresa: "tata", ciudad: "GDL", FechaDeCaptura: "16/05/2023" },
    { id: "1", Empresa: "TCS", ciudad: "CDMX", FechaDeCaptura: "16/05/2023" },
    { id: "2", Empresa: "USAA", ciudad: "MTY", FechaDeCaptura: "16/05/2023" },
  ]);

  const [modalFormVisible, setModalFormVisible] = useState(false); // Modal agregar
  const [modalSignature, setModalSignature] = useState(false);//Modal Firma
  const [modalInformacion, setModalInformacion] = useState(false);//Modal Informacion
  const [informacion, setInformacion] = useState('');//Modal Informacion

  const handleReload = () => {
    window.location.reload();
  };
  const handleFirmaGuardada = (dataURL) => {
    console.log("La firma desde el menuEquipo es: ", dataURL);
    setModalSignature(false)
    console.log("Guarde y cerre desde firmaguardada")
  };
  const handleInformation = (rowData) => {
    setModalInformacion(true)
    setInformacion(rowData)
    console.log(rowData);
    console.log("Impresion desde boton informacion")
  };
  const handleOnSignature = () => {
    setModalSignature(true)
    console.log('Lo pase a true')
  };
  const handleCloseModal = () => {
    setModalFormVisible(false)
    setModalSignature(false)
    setModalInformacion(false)
    console.log('Lo pase a false con close modal')
  }

  return (
    <div>
      <EquipoContainer
        products={products}
        handleReload={handleReload}
        modalFormVisible={modalFormVisible}
        handleCloseModal={handleCloseModal}

        //Modal Firma
        handleOnSignature={handleOnSignature}
        modalSignature={modalSignature}
        handleFirmaGuardada={handleFirmaGuardada}

        //Modal Informacion
        modalInformacion={modalInformacion}
        handleInformation={handleInformation}
        informacion={informacion}
      />
    </div>
  );
}

export default EquipoMenu;
