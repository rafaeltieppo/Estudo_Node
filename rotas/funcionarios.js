const express = require('express');
const rotas = express.Router();
const controle = require('../controle/funcionariosHttp.js');

rotas.get('/api/get', controle.doGet);
rotas.post('/api/post', controle.doPost);
rotas.put('/api/put', controle.doPut);
rotas.delete('/api/delete', controle.doDelete);

module.exports = rotas;