//Express seria o HttpServlet do java
const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
const router = express.Router();
app.use(cors());

const funcionarios = require('./rotas/funcionarios.js');
app.use(funcionarios);

app.use('/', router);
app.listen(3000, ()=> {
    console.log('Rodando na porta 3000')

})