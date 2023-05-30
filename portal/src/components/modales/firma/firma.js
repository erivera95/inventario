import React from 'react'
import SignatureCanvas from 'react-signature-canvas';
import { Button } from "primereact/button";

const FirmaContainer = (props) => {
    //let signatureCanvas = null;
    const {
        handleClear,
        //handleSave,
        //signatureCanvas 
    } = props;
    //const { handleOnSave, } = props;

    let signatureCanvas = null;

    //const handleClear = () => {
    //  signatureCanvas.clear();
    //};

    const handleSave = () => {
        const dataURL = signatureCanvas.toDataURL();
        console.log(dataURL);
        signatureCanvas.clear();
    };
    return (
        <div>
            <SignatureCanvas
                ref={(ref) => (signatureCanvas = ref)}
                canvasProps={{
                    width: "700px",
                    height: "200px",
                    //className: 'signature-canvas',
                    backgroundColor: "gray",
                    border: "2px",


                }}
            />
            <div
                id="Botones"
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "10px 20px 0px 20px",
                    //width:"100vw"
                }}
            >
                <Button
                    style={{ backgroundColor: "#00a811", border: "#6366f100" }}
                    icon="pi pi-save"
                    onClick={handleSave}
                >
                    Guardar
                </Button>
                <Button style={{ backgroundColor: "#00bacf", border: "#6366f100" }}
                    onClick={handleClear}>
                    Limpiar 
                </Button>
            </div>
        </div>
    )
}

export default FirmaContainer