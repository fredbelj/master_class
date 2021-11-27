const express = require("express");
const app = express();

const userRoutes = require("./routes/users");
const productRoutes = require("./routes/products");
const { response } = require("express");

app.use("/users", userRoutes); //end point
app.use("/products", productRoutes); //end point

app.get("/", (req, resp)=>{
    resp.json({
        "greet": "Hola aplicación corriendo!!!",
        "menssage":"pong"
    });   
});

module.exports = app;