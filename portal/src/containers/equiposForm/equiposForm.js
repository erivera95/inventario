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
        Departamentos
    } = props;

    console.log("Respuesta Empresas: ", Empresas)

    const [selectedCity, setSelectedCity] = useState(null);

    const [value, setValue] = useState("");

    return (
        <div style={{ width: "87vw" }}>

            <div class="divLabelInput" id="Empresas">
                <label htmlFor="username" class="labelInputs">
                    Empresa
                </label>
                <Dropdown
                    value={selectedCity}
                    onChange={(e) => setSelectedCity(e.value)}
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
                    value={selectedCity}
                    onChange={(e) => setSelectedCity(e.value)}
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
                        value={selectedCity}
                        onChange={(e) => setSelectedCity(e.value)}
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
                        value={selectedCity}
                        onChange={(e) => setSelectedCity(e.value)}
                        options={Puestos}
                        optionLabel="Puesto"
                        placeholder="---"
                        className="DropdownInput"
                    />
                </div>
            </div>

            <div class="divContainer" id="Version_Localidad">
                <div class="divLabelInput">
                    <label htmlFor="username" class="labelInputs">
                        Tipo de equipo
                    </label>
                    <Dropdown
                        value={selectedCity}
                        onChange={(e) => setSelectedCity(e.value)}
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
                >
                    Guardar
                </Button>
                <Button style={{ backgroundColor: "#00bacf", border: "#6366f100" }}>
                    Limpiar
                </Button>
            </div>
        </div>
    );
}

export default EquiposFormContainer