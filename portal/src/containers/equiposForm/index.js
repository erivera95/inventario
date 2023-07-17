import React, { useEffect, useState } from 'react'
import EquiposFormContainer from './equiposForm'
import { modalInfoAgregar } from '../../services/axios';

function EquiposForm() {
  const [Empresas, setEmpresas] = useState();
  const [Ciudades, setCiudades] = useState();
  const [Puestos, setPuestos] = useState();
  const [TiposEquipo, setTiposEquipo] = useState();
  const [Departamentos, setDepartamentos] = useState();
  useEffect(() => {
    console.log('Respuesta:  Corri el use efect de equipos form')
    const fetchData = async () => {
      try {
        const response = await modalInfoAgregar();
        console.log("Respuesta: ", response.data)
        setEmpresas(response.data.Empresas)
        setCiudades(response.data.Ciudades)
        setPuestos(response.data.Puestos)
        setTiposEquipo(response.data.TiposEquipo)
        setDepartamentos(response.data.Departamentos)

      } catch (error) {
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      <EquiposFormContainer
        Empresas={Empresas}
        Ciudades={Ciudades}
        Puestos={Puestos}
        TiposEquipo={TiposEquipo}
        Departamentos={Departamentos}
      />
    </div>
  )
}

export default EquiposForm