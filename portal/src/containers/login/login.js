import React from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import JET from "../../services/jet.png";
const LoginContainer = (props) => {
  
  const { handleOnclick } = props;
  
  const whiteBoxGlassStyle = {
    background: "#F0F3F4",
    borderRadius: "2px",
    width: "40vw",
    height: "40vh",
    maxHeight: "500px",
    minWidth: "500px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "100px",
  };
  const companyImageStyle = {
    background: "#F0F3F4",
    width: "170px",
    height: "120px",
    borderRadius: "50%",
    top: "70px",
    position: "relative",
    margin: "0%",
  };
  const companyNameStyle = {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "10px",
    color: "#404040",
    paddingTop: "40px",
  };
  const companyDescriptionStyle = {
    fontSize: "16px",
    marginBottom: "30px",
    color: "#404040",
  };
  const inputTextStyle = {
    width: "20vw",
    minWidth: "200px",
    marginBottom: "20px",
    textAlign: "center",
  };

  return (
    <>
      <img src={JET} alt="company logo" style={companyImageStyle} />
      <div style={whiteBoxGlassStyle}>
        <h1 style={companyNameStyle}>JET</h1>
        <p style={companyDescriptionStyle}>
          Soluciones logisticas para tu empresa
        </p>
        <InputText style={inputTextStyle} placeholder="Usuario" />
        <InputText
          style={inputTextStyle}
          type="password"
          placeholder="Contraseña"
        />
        <Button label="Entrar" onClick={handleOnclick}/>
      </div>
    </>
  );
};

export default LoginContainer;
