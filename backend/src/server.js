const express = require("express");
const app = express();
const port = 3000;

//req.query para acessar os parametros

app.post("/users",(req,res)=>{
    return res.json({
        idade : req.query.idade
    })
})

app.listen(port,()=>{
    console.log(`Running on port ${port} ...`)
})