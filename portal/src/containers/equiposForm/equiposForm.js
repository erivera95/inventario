
import React, { useState } from 'react'
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import "./style.css";

const EquiposFormContainer = (props) => {

    const {
        Empresas,
        Ciudades,
        Puestos,
        TiposEquipo,
        Departamentos,
        handleRecuperarDatos
    } = props;

    console.log("Respuesta Empresas: ", Empresas)

    const [empresa, setEmpresa] = useState(null);
    const [ciudad, setCiudade] = useState(null);
    const [puesto, setPuesto] = useState(null);
    const [tipoequipo, setTipoEquipo] = useState(null);
    const [departamento, setDepartamento] = useState(null);

    const limpiarValores = () => {
        setEmpresa(null);
        setCiudade(null);
        setPuesto(null);
        setTipoEquipo(null);
        setDepartamento(null);
      };

    return (
        <div style={{ width: "87vw" }}>

            <div class="divLabelInput" id="Empresas">
                <label htmlFor="username" class="labelInputs">
                    Empresa
                </label>
                <Dropdown
                    value={empresa}
                    onChange={(e) => setEmpresa(e.value)}
                    options={Empresas}
                    optionLabel="Empresa"
                    placeholder="---"
                    className="DropdownInput"
                />
            </div>

            <div class="divLabelInput" id="Ciudad">
                <label htmlFor="username" class="labelInputs">
                    Ciudad
                </label>
                <Dropdown
                    value={ciudad}
                    onChange={(e) => setCiudade(e.value)}
                    options={Ciudades}
                    optionLabel="Ciudad"
                    placeholder="---"
                    className="DropdownInput"
                />
            </div>

            <div class="divContainer" id="Departamento">
                <div class="divLabelInput">
                    <label htmlFor="username" class="labelInputs">
                        Departamento
                    </label>
                    <Dropdown
                        value={departamento}
                        onChange={(e) => setDepartamento(e.value)}
                        options={Departamentos}
                        optionLabel="Departamento"
                        placeholder="Selecciona Departamento"
                        className="DropdownInput"
                    />
                </div>
                <div class="divLabelInput">
                    <label htmlFor="username" class="labelInputs">
                        Puesto
                    </label>
                    <Dropdown
                        value={puesto}
                        onChange={(e) => setPuesto(e.value)}
                        options={Puestos}
                        optionLabel="Puesto"
                        placeholder="---"
                        className="DropdownInput"
                    />
                </div>
            </div>

            <div class="divContainer" id="Tipo de equipo">
                <div class="divLabelInput">
                    <label htmlFor="username" class="labelInputs">
                        Tipo de equipo
                    </label>
                    <Dropdown
                        value={tipoequipo}
                        onChange={(e) => setTipoEquipo(e.value)}
                        options={TiposEquipo}
                        optionLabel="TipoEquipo"
                        placeholder="Select a tipo"
                        className="DropdownInput"
                    />
                </div>
            </div>


            <div
                id="Botones"
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "10px 20px 0px 20px",
                }}
            >
                <Button
                    style={{ backgroundColor: "#00a811", border: "#6366f100" }}
                    icon="pi pi-save"
                    onClick={() => handleRecuperarDatos(
                        empresa.Empresa,
                        ciudad.Ciudad,
                        puesto.Puesto,
                        tipoequipo.TipoEquipo,
                        departamento.Departamento)}
                        disabled={empresa === null || ciudad === null || puesto === null || tipoequipo === null || departamento === null}
                >
                    Guardar
                </Button>
                <Button style={{ backgroundColor: "#00bacf", border: "#6366f100" }} onClick={limpiarValores}>
                    Limpiar
                </Button>
            </div>
        </div>
    );
}

export default EquiposFormContainer