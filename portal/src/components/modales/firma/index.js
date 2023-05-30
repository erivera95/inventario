import React, { useRef } from 'react'
import FirmaContainer from './firma'

function Firma({ onFirmaGuardada }) {
    const signatureCanvasRef = useRef(null);

    const handleClear = () => {
        if (signatureCanvasRef.current) {
            signatureCanvasRef.current.clear();
        }
    };

    const handleSave = () => {
        if (signatureCanvasRef.current) {
            const dataURL = signatureCanvasRef.current.toDataURL();
            console.log(dataURL);
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