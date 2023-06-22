import React, { useState } from "react";
import LicenciasContainer from "./licencias";

function Licencias() {
  const [modalFormVisible, setModalFormVisible] = useState(false);
  const [products, setProducts] = useState([
    { id: "001", Empresa: "Google", Duracion: "1M", Version: "12.3.1" },
    { id: "256", Empresa: "USAA", Duracion: "1Y", Version: "13.2.3" },
    { id: "051", Empresa: "TCS", Duracion: "6M", Version: "4.0.1" },
  ]);
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
      <LicenciasContainer
        products={products}
        handleOnClickAdd={handleOnClickAdd}
        modalFormVisible={modalFormVisible}
        handleCloseModal={handleCloseModal}
      />
    </div>
  );
}

export default Licencias;
