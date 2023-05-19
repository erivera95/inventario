import React, { useState } from "react";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import "./style.css";
import { Button } from "primereact/button";

const LicenciasContainer = () => {
  const [selectedCity, setSelectedCity] = useState(null);
  const cities = [
    { name: "New York", code: "NY" },
    { name: "Rome", code: "RM" },
    { name: "London", code: "LDN" },
    { name: "Istanbul", code: "IST" },
    { name: "Paris", code: "PRS" },
  ];

  const [value, setValue] = useState("");

  return (
    <div style={{ width: "87vw" }}>
      <div class="divLabelInput">
        <label htmlFor="username" class="labelInputs">
          Empresa
        </label>
        <Dropdown
          value={selectedCity}
          onChange={(e) => setSelectedCity(e.value)}
          options={cities}
          optionLabel="name"
          placeholder="Select a City"
          className="DropdownInput"
        />
      </div>
      <div class="divLabelInput">
        <label htmlFor="username" class="labelInputs">
          Nombre del usuario
        </label>
        <InputText
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="inputText"
        />
      </div>
      <div class="divContainer">
        <div class="divLabelInput">
          <label htmlFor="username" class="labelInputs">
            Empresa
          </label>
          <Dropdown
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.value)}
            options={cities}
            optionLabel="name"
            placeholder="Select a City"
            className="DropdownInput"
          />
        </div>
        <div class="divLabelInput">
          <label htmlFor="username" class="labelInputs">
            Empresa
          </label>
          <Dropdown
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.value)}
            options={cities}
            optionLabel="name"
            placeholder="Select a City"
            className="DropdownInput"
          />
        </div>
      </div>
      <div class="divContainer">
        <div class="divLabelInput">
          <label htmlFor="username" class="labelInputs">
            Empresa
          </label>
          <Dropdown
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.value)}
            options={cities}
            optionLabel="name"
            placeholder="Select a City"
            className="DropdownInput"
          />
        </div>
        <div class="divLabelInput">
          <label htmlFor="username" class="labelInputs">
            Empresa
          </label>
          <Dropdown
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.value)}
            options={cities}
            optionLabel="name"
            placeholder="Select a City"
            className="DropdownInput"
          />
        </div>
      </div>
      <div class="divLabelInput">
        <label htmlFor="username" class="labelInputs">
          Comentarios
        </label>
        <InputTextarea
          value={value}
          onChange={(e) => setValue(e.target.value)}
          rows={3}
          cols={30}
          className="inputTextArea"
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "10px 20px 0px 20px",
        }}
      >
        <Button style={{ backgroundColor: "#00a811", border: "#6366f100" }} icon="pi pi-save">
        Guardar
        </Button>
        <Button style={{ backgroundColor: "#00bacf", border: "#6366f100" }}>
          Limpiar
        </Button>
      </div>
    </div>
  );
};

export default LicenciasContainer;
