const express = require("express");
const app = express();
const port = 3000;

//req.query para acessar os parametros ?idade=20
//para filtros

//req.params acessar parametros da url users/1
//para edicao,delete

//req.body Acessar o corpo da requisição

app.use(express.json())

app.post("/users",(req,res)=>{
    return res.json(req.body)
})

app.put("/users/:id",(req,res)=>{
    return res.json({
        id : req.params.id
    })
})

app.listen(port,()=>{
    console.log(`Running on port ${port} ...`)
})