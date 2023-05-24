import React from 'react'
import SignatureCanvas from 'react-signature-canvas';

const FirmaContainer = (props) => {
    const { handleClear, handleSave ,signatureCanvas} = props;
    return (
        <div>
            <SignatureCanvas
                ref={(ref) => (signatureCanvas = ref)}
                canvasProps={{ width: 500, height: 200, className: 'signature-canvas' }}
            />
            <button onClick={handleClear}>Borrar</button>
            <button onClick={handleSave}>Guardar</button>
        </div>
    )
}

export default FirmaContainer