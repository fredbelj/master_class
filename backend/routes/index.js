const express = require("express");
const app = express();

const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUI = require("swagger-ui-express")
const swaggerDocument = require("../swagger.json");
const specs = swaggerJsDoc(swaggerDocument);


const userRoutes = require("./users");
const productRoutes = require("./products");
const { response } = require("express");

app.use("/users", userRoutes); //end point
app.use("/products", productRoutes); //end point

/* MENSAJE /pong) DE PRUEBA */
app.get("/ping", (req, resp)=>{
    resp.json({
        "greet": "Hola aplicación corriendo!!!",
        "menssage":"pong"
    })
});   
app.get("/", swaggerUI.serve, swaggerUI.setup(specs)) /* se entrega parametos confi en swagger.js al ser llamada la raiz / */

module.exports = app;