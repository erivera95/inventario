import React, { useEffect, useState } from "react";
import EquipoContainer from "./equipo";
import { EquiposGET } from "../../services/axios";


function EquipoMenu() {

  useEffect(() => {
    console.log('Respuesta:  Corri el use efect')
    const fetchData = async () => {
      try {
        const response = await EquiposGET();
        //console.log('Respuesta ', response.data);
        setProducts(response.data) // Aquí puedes hacer lo que necesites con los datos recibidos
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const [products, setProducts] = useState();

  const [modalFormVisible, setModalFormVisible] = useState(false); // Modal agregar
  const [modalSignature, setModalSignature] = useState(false);//Modal Firma
  const [modalInformacion, setModalInformacion] = useState(false);//Modal Informacion
  const [informacion, setInformacion] = useState('');//Modal Informacion




  const handleReload = () => {
    window.location.reload();
  };
  const handleOnClickAdd = () => {
    setModalFormVisible(true)
    console.log('Lo pase a true')
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
        handleOnClickAdd={handleOnClickAdd}
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
