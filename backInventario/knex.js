const knexConfig = {
    client: 'mssql',
    connection: {
        server: '192.168.100.57',
        // server: 'localhost',
        user: 'sa',
        password: 'Jerc@2023',
        database: 'Inventario',
    }
};

module.exports = knexConfig;