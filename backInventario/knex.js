const knexConfig = {
    client: 'mssql',
    connection: {
        server: 'localhost',
        user: 'sa',
        password: 'Jerc@2023',
        database: 'Inventario',
    }
};

module.exports = knexConfig;