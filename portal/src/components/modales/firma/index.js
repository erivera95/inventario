import React from 'react'
import FirmaContainer from './firma'

function Firma() {
    let signatureCanvas = null;

    const handleClear = () => {
        signatureCanvas.clear();
    };

    const handleSave = () => {
        const dataURL = signatureCanvas.toDataURL();
        console.log(dataURL);
    };
    return (
        <div><FirmaContainer
            handleClear={handleClear}
            handleSave={handleSave}
            signatureCanvas={signatureCanvas}
        /></div>
    )
}

export default Firma