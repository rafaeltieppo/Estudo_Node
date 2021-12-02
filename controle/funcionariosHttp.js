//Importação da conexão do banco de dados
const {con} = require('./connectDb.js')
const modelo = require('../modelo/funcionario.js')

const doGet = (req, res)=> {
    let string = 'select * from funcionarios'
    con.query(string, (err, result) => {
        res.json(result)
    })
}

const doPost = (req, res)=> {
    let nome_completo = "\""+req.body.nome_completo+"\"";
    let data_desligamento = "\""+req.body.data_desligamento+"\"";
    let ultimo_salario = req.body.ultimo_salario;
    let string = `INSERT INTO funcionarios(nome_completo, data_desligamento, ultimo_salario) VALUES (${nome_completo}, ${data_desligamento}, ${ultimo_salario})`
    con.query(string, (err, result)=> {
        if(result.affectedRows == 1) {
            res.json(modelo.reformJson(req.body, result.insertId));
        }else {
            res.status(400).end();
        }
    })
}

const doPut = (req, res) => {
    let matricula = req.body.matricula;
    let nome_completo = "\""+req.body.nome_completo+"\"";
    let data_desligamento = "\""+req.body.data_desligamento+"\"";
    let ultimo_salario = req.body.ultimo_salario;
    let string = `UPDATE funcionarios set nome_completo = ${nome_completo}, data_desligamento = ${data_desligamento}, ultimo_salario = ${ultimo_salario} where matricula = ${matricula}`;
    con.query(string, (err, result)=> {
        res.json(result);
    })
}

const doDelete = (req, res) => {
    let string = `DELETE FROM funcionarios WHERE matricula = ${req.params.matricula}`
    con.query(string, (err, result)=> {
        res.json(result);
    })
}

//Exportação da função
module.exports = {
    doGet,
    doPost,
    doPut,
    doDelete
}