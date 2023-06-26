import React from 'react'
import './style.css'
import moment from "moment";
import { Splitter, SplitterPanel } from 'primereact/splitter';
function Informacion({ informacion }) {
  console.log("Datos desde el modal informacion", informacion)
  const fechaFormateada = moment(informacion.Fecha).format("DD/MM/YYYY");
  return (
    <div>
        <h1 className='headerModalInformacion'>Informacion</h1>
      <Splitter style={{ height: '50px' }}>
        <SplitterPanel className="titulo">ID</SplitterPanel>
        <SplitterPanel className="informacion">{informacion.ID}</SplitterPanel>
      </Splitter>
      <Splitter style={{ height: '50px' }}>
        <SplitterPanel className="titulo">Empresa</SplitterPanel>
        <SplitterPanel className="informacion">{informacion.Empresa}</SplitterPanel>
      </Splitter>
      <Splitter style={{ height: '50px' }}>
        <SplitterPanel className="titulo">Fecha De Captura</SplitterPanel>
        <SplitterPanel className="informacion">{fechaFormateada}</SplitterPanel>
      </Splitter>
      <Splitter style={{ height: '50px' }}>
        <SplitterPanel className="titulo">Ciudad</SplitterPanel>
        <SplitterPanel className="informacion">{informacion.Ciudad}</SplitterPanel>
      </Splitter>

    </div>
  )
}

export default Informacion