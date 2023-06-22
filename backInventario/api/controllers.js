
const db = require('../database/db');

// Controlador para la ruta raíz "/"
async function getRoot(req, res) {
  res.send('Estoy respondiendo desde la función de API');
}

async function getEquipo(req, res) {
  try {
    const pool = await db.poolPromise;
    const result = await pool.request().query('SELECT * FROM EquipoComputo');
    res.send(result.recordset);

  } catch (error) {
    console.error('Error al realizar la consulta a la base de datos', error);
    res.status(500).send('Error al realizar la consulta a la base de datos');
  }
}


async function createEquipo(req, res) {
  try {
    const { Empresa, Ciudad, Firma } = req.body;
    const pool = await db.poolPromise;
    const query = `INSERT INTO EquipoComputo (Empresa, Ciudad, Fecha, Firma) VALUES ('${Empresa}', '${Ciudad}', CURRENT_TIMESTAMP, '${Firma}')`;
    await pool.request().query(query)
    res.send(`Datos ingresados exitosamente: Empresa=${Empresa}, Ciudad=${Ciudad}, Firma=${Firma}`);
    //res.send(`Datos ingresados exitosamente`);
    console.log(req.body)
  } catch (error) {
    console.error('Error al insertar datos dummy', error);
    res.status(500).send('Error al insertar datos dummy');
  }
}

module.exports = {
  getRoot,
  getEquipo,
  createEquipo,
};