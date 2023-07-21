const db = require('../database/db');

const knexConfig = require('../knex');
const knex = require('knex')(knexConfig);

async function getEquipoKnex() {
    try {
        const result = await knex('EquipoComputo').select('*');
        return result;
    } catch (error) {
        console.error('Error al realizar la consulta a la base de datos', error);
        throw error;
    }
}

async function getEquipo() {
    try {
        const result = await knex('EquipoComputo').select('*');
        return result;
    } catch (error) {
        console.error('Error al realizar la consulta a la base de datos', error);
        throw error;
    }
}

async function getEmpresas() {
    try {
        const empresas = await knex('Empresas').select('*');
        return empresas;
    } catch (error) {
        console.error('Error al realizar la consulta a la base de datos', error);
        throw error;
    }
}

async function getCiudades() {
    try {
        const ciudades = await knex('Ciudades').select('*');
        return ciudades;
    } catch (error) {
        console.error('Error al realizar la consulta a la base de datos', error);
        throw error;
    }
}

async function getPuestos() {
    try {
        const puestos = await knex('Puestos').select('*');
        return puestos;
    } catch (error) {
        console.error('Error al realizar la consulta a la base de datos', error);
        throw error;
    }
}

async function getTiposEquipo() {
    try {
        const tiposEquipo = await knex('TiposEquipo').select('*');
        return tiposEquipo;
    } catch (error) {
        console.error('Error al realizar la consulta a la base de datos', error);
        throw error;
    }
}

async function getDepartamentos() {
    try {
        const departamentos = await knex('Departamentos').select('*');
        return departamentos;
    } catch (error) {
        console.error('Error al realizar la consulta a la base de datos', error);
        throw error;
    }
}

async function agregarEquipo(Datos) {
    console.log("Los datos recibidos en back son ", Datos)
    // try {
    //     await knex('EquipoComputo').insert({
    //         Empresa: Empresa,
    //         Ciudad: Ciudad,
    //         Fecha: new Date().toISOString(),
    //         Firma: Firma,
    //         Departamento: Departamento,
    //         Puesto: Puesto,
    //         TipoEquipo: TipoEquipo
    //     });
    //     console.log(`Datos ingresados exitosamente: Empresa=${Empresa}, Ciudad=${Ciudad}, Firma=${Firma}, Departamento=${Departamento}, Puesto=${Puesto}, TipoEquipo=${TipoEquipo}`);
    //     return `Datos ingresados exitosamente: Empresa=${Empresa}, Ciudad=${Ciudad}, Firma=${Firma}, Departamento=${Departamento}, Puesto=${Puesto}, TipoEquipo=${TipoEquipo}`;
    // } catch (error) {
    //     console.error('Error al insertar datos a la base de datos', error);
    // }
}

async function actualizarFirma(id, nuevaFirma) {
    try {
        await knex('EquipoComputo')
            .update({ Firma: nuevaFirma })
            .where({ ID: id })
        console.log('Firma actualizada correctamente');
    } catch (error) {
        console.error('Error al actualizar la firma:', error);
        throw error;
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
    actualizarFirma,

    getEquipoKnex,
};