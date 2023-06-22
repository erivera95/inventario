  const sql = require('mssql');
  const config = require('../config');

  const { host, user, password, databaseName } = config.database;
  const dbConfig = {
    user,
    password,
    server: host,
    database: databaseName,
    options: {
      trustServerCertificate: true, // Permitir conexiones sin verificar el certificado
    },
  };

  const poolPromise = (async () => {
    try {
      const pool = await sql.connect(dbConfig);
      console.log('Conectado a la base de datos');
      return pool;
    } catch (error) {
      console.error('Error al conectar a la base de datos', error);
      throw error;
    }
  })();

  module.exports = {
    poolPromise,
  };