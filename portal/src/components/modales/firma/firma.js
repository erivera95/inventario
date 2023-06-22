import React from 'react'
import SignatureCanvas from 'react-signature-canvas';
import { Button } from "primereact/button";

const FirmaContainer = (props) => {
    //let signatureCanvas = null;
    const {
        handleClear,
        handleSave,
        signatureCanvasRef
    } = props;

    return (
        <div>
            <SignatureCanvas ref={signatureCanvasRef} />

            <div id="Botones"
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "10px 20px 0px 20px"
                }}>
                <Button
                    style={{ backgroundColor: "#00a811", border: "#6366f100" }}
                    icon="pi pi-save"
                    onClick={handleSave}
                >
                    Guardar
                </Button>
                <Button
                    style={{ backgroundColor: "#00bacf", border: "#6366f100" }}
                    onClick={handleClear}
                >
                    Limpiar
                </Button>
            </div>
        </div>
    )
}

export default FirmaContainer