import React, { useState } from "react";
import EquipoContainer from "./equipo";

function EquipoMenu() {

  const [modalFormVisible, setModalFormVisible] = useState(false);
  const [products, setProducts] = useState([
    { id: "0", Empresa: "tata", ciudad: "GDL", FechaDeCaptura: "16/05/2023" },
    { id: "1", Empresa: "TCS", ciudad: "CDMX", FechaDeCaptura: "16/05/2023" },
    { id: "2", Empresa: "USAA", ciudad: "MTY", FechaDeCaptura: "16/05/2023" },
  ]);
  const handlePrintRow = (rowData) => {
    console.log(rowData);
  };
  const handleOnClickAdd = () => {
    setModalFormVisible(true)
    console.log('Lo pase a true')
  };
  const handleCloseModal = () => {
    setModalFormVisible(false)
    console.log('Lo pase a false')
  }
  return (
    <div>
      <EquipoContainer
        handlePrintRow={handlePrintRow}
        products={products}
        handleOnClickAdd={handleOnClickAdd}
        modalFormVisible={modalFormVisible}
        handleCloseModal={handleCloseModal} />
    </div>
  );
}

export default EquipoMenu;
