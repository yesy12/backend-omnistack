const express = require("express");
const routes = express.Router();
const multer = require("multer");

const UploadConfig = require("./config/upload")
const SessionController = require("./controllers/SessionController")
const SpotController = require("./controllers/SpotController")

const upload = multer(UploadConfig);

//req.query para acessar os parametros ?idade=20
//para filtros

//req.params acessar parametros da url users/1
//para edicao,delete

//req.body Acessar o corpo da requisição

routes.post("/users/",SessionController.store);

routes.post("/spots/", upload.single("thumbnail"), SpotController.store);


module.exports = routes;