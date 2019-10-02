const express = require("express");
const app = express();
const port = 3000;

//req.query para acessar os parametros ?idade=20
//req.params acessar parametros da url users/1

app.post("/users",(req,res)=>{
    return res.json({
        idade : req.query.idade
    })
})

app.put("/users/:id",(req,res)=>{
    return res.json({
        id : req.params.id
    })
})

app.listen(port,()=>{
    console.log(`Running on port ${port} ...`)
})