const express = require("express");
const app = express();
const port = 3000;
const routes = require("./routes");

app.use(express.json());
app.use(routes);

app.listen(port,()=>{
    console.log(`Running on port ${port} ...`)
})

const username = "omnistack";
const password = "lPBVFfPw8sK4QbEC";
const banco = "omnistack";
const link = `mongodb+srv://${username}:${password}@cluster0-nth3w.mongodb.net/${banco}?retryWrites=true&w=majority`