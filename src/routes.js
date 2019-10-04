const express = require("express");
const routes = express.Router();

const multer = require("multer");
const UploadConfig = require("./config/upload")
const upload = multer(UploadConfig);

const SessionController = require("./controllers/SessionController");
const SpotController = require("./controllers/SpotController");
const DashboardController = require("./controllers/DashboardController");
const BookingController = require("./controllers/BookingController");

//req.query para acessar os parametros ?idade=20
//para filtros

//req.params acessar parametros da url users/1
//para edicao,delete

//req.body Acessar o corpo da requisição

routes.get("/",(req,res)=>{
    res.send("Teste")
})

routes.post("/users/",SessionController.store);

routes.post("/spots/", upload.single("thumbnail"), SpotController.store);

routes.get("/spots/", SpotController.index);

routes.get("/dashboard/", DashboardController.show);

routes.post("/spots/:spot_id/bookings",BookingController.store);

module.exports = routes;