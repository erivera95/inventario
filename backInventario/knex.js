const knexConfig = {
    client: 'mssql',
    connection: {
        server: '192.168.100.56',
        // server: 'localhost',
        user: 'sa',
        password: 'Jerc@2023',
        database: 'Inventario',
    }
};

module.exports = knexConfig;