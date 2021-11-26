const express = require("express");
const app = express();

const userRoutes = require("./routes/users");
const productRoutes = require("./routes/products");
const { response } = require("express");

app.use("/users", userRoutes);
app.use("/products", productRoutes);

/*app.get("/", (req, resp)=>{
    resp.json({
        "greet": "Hola aplicación corriendo!!!"
    });   
});*/

app.get("/", (req, resp)=>{
    resp.json({
        "menssage":"pong"
    })
})
const server = app.listen(8000, ()=>{
    let host = server.address().address;
    let port = server.address().port;
    console.log("Server listening at http://",host,port);
});