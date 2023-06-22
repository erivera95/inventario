import React from 'react'
import './style.css'
import { Splitter, SplitterPanel } from 'primereact/splitter';
function Informacion({ informacion }) {
  console.log("Datos desde el modal informacion", informacion)
  return (
    <div>
        <h1 className='headerModalInformacion'>Informacion</h1>
      <Splitter style={{ height: '50px' }}>
        <SplitterPanel className="titulo">ID</SplitterPanel>
        <SplitterPanel className="informacion">{informacion.id}</SplitterPanel>
      </Splitter>
      <Splitter style={{ height: '50px' }}>
        <SplitterPanel className="titulo">Empresa</SplitterPanel>
        <SplitterPanel className="informacion">{informacion.Empresa}</SplitterPanel>
      </Splitter>
      <Splitter style={{ height: '50px' }}>
        <SplitterPanel className="titulo">Fecha De Captura</SplitterPanel>
        <SplitterPanel className="informacion">{informacion.FechaDeCaptura}</SplitterPanel>
      </Splitter>
      <Splitter style={{ height: '50px' }}>
        <SplitterPanel className="titulo">Ciudad</SplitterPanel>
        <SplitterPanel className="informacion">{informacion.ciudad}</SplitterPanel>
      </Splitter>

    </div>
  )
}

export default Informacion