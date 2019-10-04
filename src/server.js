const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const app = express();

const port = process.env.PORT || 3000;
const routes = require("./routes");

const cors = require("cors");


const username = "omnistack";
const password = "lPBVFfPw8sK4QbEC";
const banco = "omnistack";
const link = `mongodb+srv://${username}:${password}@cluster0-nth3w.mongodb.net/${banco}?retryWrites=true&w=majority`
mongoose.connect(link,{ 
    useNewUrlParser: true,
    useUnifiedTopology: true 
})
.then(()=>{
    console.log("Conectado MongoDb Atlas");
})
.catch((error)=>{
    console.log(error);
})

app.use(cors())
app.use(express.json());
app.use("/files", express.static(
    path.resolve(
        __dirname,"..","uploads"
    )
))
app.use(routes);

app.listen(port,()=>{
    console.log(`Running on port ${port} ...`)
})
