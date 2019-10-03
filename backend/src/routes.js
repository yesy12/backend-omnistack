const express = require("express");
const routes = express.Router();
const SessionController = require("./controllers/SessionController")

//req.query para acessar os parametros ?idade=20
//para filtros

//req.params acessar parametros da url users/1
//para edicao,delete

//req.body Acessar o corpo da requisição

routes.post("/users/",SessionController.store);


module.exports = routes;