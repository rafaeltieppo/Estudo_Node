const express = require('express');
const rotas = express.Router();
const controle = require('../controle/funcionarios.js');

rotas.get('/api', controle.doGet);
rotas.post('/api/doPost', controle.doPost);

module.exports = rotas;