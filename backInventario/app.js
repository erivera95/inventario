const express = require('express');
const app = express();
const apiRoutes = require('./api/routes');
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use('/', apiRoutes);


const port = 3000;

app.listen(port, () => {
  console.log(`Servidor iniciado en el puerto ${port}`);
});