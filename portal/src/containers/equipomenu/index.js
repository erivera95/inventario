import React, { useEffect, useState } from "react";
import EquipoContainer from "./equipo";
import { getEquipos, createEquipo, actualizarFirma } from "../../services/axios";


function EquipoMenu() {

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getEquipos();
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
  const [modalConfirmation, setModalConfirmation] = useState(true);//Modl Confirmacion
  const [idFirma, setIdFirma] = useState('');//Id temporal para modal firma




  const handleReload = () => {
    window.location.reload();
  };
  const handleOnClickAdd = () => {
    setModalFormVisible(true)
    console.log('Lo pase a true')
  };
  const handleFirmaGuardada = async (dataURL) => {

    console.log("La firma desde el menuEquipo es: ", dataURL,idFirma);
    //const response = await actualizarFirma(idFirma, dataURL);
    //console.log("Respuesta de la solicitud POST FIRMA: ", response);
    //setModalSignature(false)
    console.log("Guarde y cerre desde firmaguardada")
  };
  const handleAgregar = async (Datos) => {
    try {
      const response = await createEquipo(Datos);
      console.log("Respuesta de la solicitud POST: ", response);
      setIdFirma(response.data);
    } catch (error) {
      console.error("Error al realizar la solicitud POST: ", error);
    }
    handleCloseModal();
    setModalConfirmation(true);
  };
  const handleInformation = (rowData) => {
    setModalInformacion(true)
    setInformacion(rowData)
    console.log(rowData);
    console.log("Impresion desde boton informacion")
  };
  const handleOnSignature = (rowData) => {
    handleCloseModal()
    //setModalSignature(true)
    console.log("El rowdata es:", rowData.ID)
    rowData == undefined ? console.log(rowData.ID) : console.log("No hay información en rowData. ID", idFirma);
  };
  const handleCloseModal = () => {
    setModalFormVisible(false)
    setModalSignature(false)
    setModalInformacion(false)
    setModalConfirmation(false)
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

        //Modal Agregar
        handleAgregar={handleAgregar}

        //Modal Firma
        handleOnSignature={handleOnSignature}
        modalSignature={modalSignature}
        handleFirmaGuardada={handleFirmaGuardada}

        //Modal Informacion
        modalInformacion={modalInformacion}
        handleInformation={handleInformation}
        informacion={informacion}

        //Modal Confirmacion
        modalConfirmation={modalConfirmation}
      />
    </div>
  );
}

export default EquipoMenu;
