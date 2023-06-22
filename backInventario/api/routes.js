const express = require('express');
const router = express.Router();

// Importar los controladores
const { getRoot, getEquipo, createEquipo } = require('./controllers');

// Definir las rutas
router.get('/', getRoot);
router.get('/EquipoComputoGET', getEquipo);
router.post('/EquipoComputoPOST', createEquipo);

module.exports = router;