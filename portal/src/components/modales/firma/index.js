import React, { useRef } from 'react'
import FirmaContainer from './firma'

function Firma({ onFirmaGuardada }) {
    const signatureCanvasRef = useRef(null);

    const handleClear = () => {
        if (signatureCanvasRef.current) {
            signatureCanvasRef.current.clear();
        }
        console.log("Limpie desde interno")
    };

    const handleSave = () => {
        if (signatureCanvasRef.current) {
            const dataURL = signatureCanvasRef.current.toDataURL();
            onFirmaGuardada(dataURL);
            signatureCanvasRef.current.clear();
        }
    };
    return (
        <div>
            <FirmaContainer
                handleClear={handleClear}
                handleSave={handleSave}
                signatureCanvasRef={signatureCanvasRef}
            />
        </div>
    )
}

export default Firma