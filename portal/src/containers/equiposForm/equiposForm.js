import React, { useState } from 'react'
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { Button } from "primereact/button";
import "./style.css";

const EquiposFormContainer = () => {

    
    const [selectedCity, setSelectedCity] = useState(null);

    const empresas = [
        { name: "New York Life", code: "NY" },
        { name: "Riveras Movement", code: "RM" },
        { name: "London Package", code: "LDN" },
        { name: "Information static", code: "IST" },
        { name: "AXA", code: "AXa" },
    ];
    const Plazo = [
        { name: "1 Mes", code: "1M" },
        { name: "6 Meses", code: "6M" },
        { name: "1 Año", code: "1Y" },
        { name: "De por vida", code: "LT" },
    ];
    const Departamento = [
        { name: "New York Life", code: "NY" },
        { name: "Riveras Movement", code: "RM" },
        { name: "London Package", code: "LDN" },
        { name: "Information static", code: "IST" },
        { name: "AXA", code: "AXa" },
    ];
    const Version = [
        { name: "New York Life", code: "NY" },
        { name: "Riveras Movement", code: "RM" },
        { name: "London Package", code: "LDN" },
        { name: "Information static", code: "IST" },
        { name: "AXA", code: "AXa" },
    ];
    const Localidad = [
        { name: "New York Life", code: "NY" },
        { name: "Riveras Movement", code: "RM" },
        { name: "London Package", code: "LDN" },
        { name: "Information static", code: "IST" },
        { name: "AXA", code: "AXa" },
    ];

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
                    options={empresas}
                    optionLabel="name"
                    placeholder="---"
                    className="DropdownInput"
                />
            </div>

            <div class="divLabelInput" id="Ciudad">
                <label htmlFor="username" class="labelInputs">
                    Ciudad
                </label>
                <InputText
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    className="inputText"
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
                        options={Departamento}
                        optionLabel="name"
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
                        options={Departamento}
                        optionLabel="name"
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
                        options={Version}
                        optionLabel="name"
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