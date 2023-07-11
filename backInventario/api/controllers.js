const db = require('../database/db');
const services = require('./services')

async function getRoot(req, res) {
  res.send('Estoy respondiendo desde la función de API');
}

async function getEquipo(req, res) {
  try {
    const equiposGet = await services.getEquipo();
    res.send(equiposGet)
  } catch (error) {
    console.error('Error al realizar la consulta a la base de datos', error);
    res.status(500).send('Error al realizar la consulta a la base de datos');
  }
}

async function createEquipo(req, res) {
  try {
    const { Empresa, Ciudad, Firma } = req.body;
    const resultado = await services.agregarEquipo(Empresa, Ciudad, Firma);
    res.send(resultado);
    console.log(req.body)
  } catch (error) {
    console.error('Error al insertar datos dummy', error);
    res.status(500).send('Error al insertar datos dummy');
  }
}

async function infoModalForm(req, res) {
  try {

    const empresasGet = await services.getEmpresas();
    const ciudadesGet = await services.getCiudades();
    const puestosGet = await services.getPuestos();
    const tiposEquipoGet = await services.getTiposEquipo();
    const departamentosGet = await services.getDepartamentos();

    const datos = {
      Empresas: empresasGet,
      Ciudades: ciudadesGet,
      Puestos: puestosGet,
      TiposEquipo: tiposEquipoGet,
      Departamentos: departamentosGet,
    };
    res.status(200).json(datos);
  } catch (error) {
    console.log(error)
    res.status(500).send('Error al consultar los datos completos');
  }
}
async function getEmpresas(req, res) {
  try {
    const empresasGet = await services.getEmpresas();
    res.status(200).send(empresasGet);
  } catch (error) {
    console.log(error)
    res.status(500).send('Error al consultar las datos de empresas');
  }
}
async function getCiudades(req, res) {
  try {
    const ciudadesGet = await services.getCiudades();
    res.status(200).send(ciudadesGet);
  } catch (error) {
    console.log(error)
    res.status(500).send('Error al consultar las datos de las Ciudades');
  }
}
async function getPuestos(req, res) {
  try {
    const puestosGet = await services.getPuestos();
    res.status(200).send(puestosGet);
  } catch (error) {
    console.log(error)
    res.status(500).send('Error al consultar las datos de los puestos');
  }
}
async function getTiposEquipo(req, res) {
  try {
    const tiposEquipoGet = await services.getTiposEquipo();
    res.status(200).send(tiposEquipoGet);
  } catch (error) {
    console.log(error)
    res.status(500).send('Error al consultar las datos de los tipos de equipos');
  }
}
async function getDepartamentos(req, res) {
  try {
    const departamentosGet = await services.getDepartamentos();
    res.status(200).send(departamentosGet);
  } catch (error) {
    console.log(error)
    res.status(500).send('Error al consultar las datos de Departamentos');
  }
}

module.exports = {
  getRoot,
  getEquipo,
  createEquipo,
  infoModalForm,
  getEmpresas,
  getCiudades,
  getPuestos,
  getTiposEquipo,
  getDepartamentos
};