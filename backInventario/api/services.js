const db = require('../database/db');

async function getEquipo() {
    try {
        const pool = await db.poolPromise;
        const result = await pool.request().query('SELECT * FROM EquipoComputo');
        return result.recordset;
    } catch (error) {
        console.error('Error al realizar la consulta a la base de datos', error);
        throw error;
    }
}
async function getEmpresas() {
    try {
        const pool = await db.poolPromise;
        const empresasResult = await pool.request().query('SELECT * FROM Empresas');
        return empresasResult.recordset;
    } catch (error) {
        console.error('Error al realizar la consulta a la base de datos', error);
        throw error;
    }
}
async function getCiudades() {
    try {
        const pool = await db.poolPromise;
        const ciudadesResult = await pool.request().query('SELECT * FROM Ciudades');
        return ciudadesResult.recordset;
    } catch (error) {
        console.error('Error al realizar la consulta a la base de datos', error);
        throw error;
    }
}
async function getPuestos() {
    try {
        const pool = await db.poolPromise;
        const puestosResult = await pool.request().query('SELECT * FROM Puestos');
        return puestosResult.recordset;
    } catch (error) {
        console.error('Error al realizar la consulta a la base de datos', error);
        throw error;
    }
}
async function getTiposEquipo() {
    try {
        const pool = await db.poolPromise;
        const tiposEquipoResult = await pool.request().query('SELECT * FROM TiposEquipo');
        return tiposEquipoResult.recordset;
    } catch (error) {
        console.error('Error al realizar la consulta a la base de datos', error);
        throw error;
    }
}
async function getDepartamentos() {
    try {
        const pool = await db.poolPromise;
        const departametnosResult = await pool.request().query('SELECT * FROM Departamentos');
        return departametnosResult.recordset;
    } catch (error) {
        console.error('Error al realizar la consulta a la base de datos', error);
        throw error;
    }
}

async function agregarEquipo(Empresa, Ciudad, Firma) {
    try {
        const pool = await db.poolPromise;
        const query = `INSERT INTO EquipoComputo (Empresa, Ciudad, Fecha, Firma) VALUES ('${Empresa}', '${Ciudad}', CURRENT_TIMESTAMP, '${Firma}')`;
        await pool.request().query(query)
        console.log(`Datos ingresados exitosamente: Empresa=${Empresa}, Ciudad=${Ciudad}, Firma=${Firma}`)
        return `Datos ingresados exitosamente: Empresa=${Empresa}, Ciudad=${Ciudad}, Firma=${Firma}`
    } catch (error) {
        console.error('Error al insertar datos a la base de datos', error)
    }
}



module.exports = {
    getEquipo,
    agregarEquipo,
    getEmpresas,
    getCiudades,
    getPuestos,
    getTiposEquipo,
    getDepartamentos,
};