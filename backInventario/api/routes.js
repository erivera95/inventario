const express = require('express');
const router = express.Router();

// Importar los controladores
const {
    getRoot,
    getEquipo,
    actualizarFirma,
    createEquipo,
    getEmpresas,
    getCiudades,
    getPuestos,
    getTiposEquipo,
    getDepartamentos,
    infoModalForm,
    getEquipoKnex
} = require('./controllers');

// Definir las rutas
router.get('/', getRoot);
router.get('/knex', getEquipoKnex); //recupera informacion de la tabla equiposcomputo

router.get('/equipos/todos', getEquipo); //recupera informacion de la tabla equiposcomputo
router.post('/actualizarfirma', actualizarFirma); //Agrega informacion al campo firma
router.post('/equipos/agregar', createEquipo); //agrega informacion a la tabla equipos computo
router.get('/empresas/lista', getEmpresas);//recupera informacion de la tabla
router.get('/ciudades/lista', getCiudades);//recupera informacion de la tabla
router.get('/puestos/lista', getPuestos);//recupera informacion de la tabla
router.get('/tipos-equipo/lista', getTiposEquipo);//recupera informacion de la tabla
router.get('/departamentos/lista', getDepartamentos);//recupera informacion de la tabla

router.get('/infoModalAgregar', infoModalForm);//recupera informacion de la tabla
module.exports = router;