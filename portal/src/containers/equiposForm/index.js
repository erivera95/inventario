import React, { useEffect, useState } from 'react'
import EquiposFormContainer from './equiposForm'
import { modalInfoAgregar } from '../../services/axios';

function EquiposForm({ Datos }) {
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

  const handleRecuperarDatos = (Empresa, Ciudad, Puesto, TipoEquipo, Departamento) => {
    const datosSeleccionados = {
      Empresa: Empresa,
      Ciudad: Ciudad,
      Puesto: Puesto,
      TipoEquipo: TipoEquipo,
      Departamento: Departamento
    };
    console.log("Los datos seleccionados fueron ", datosSeleccionados);
    Datos(datosSeleccionados);
  }

  return (
    <div>
      <EquiposFormContainer
        Empresas={Empresas}
        Ciudades={Ciudades}
        Puestos={Puestos}
        TiposEquipo={TiposEquipo}
        Departamentos={Departamentos}
        handleRecuperarDatos={handleRecuperarDatos}
      />
    </div>
  )
}

export default EquiposForm