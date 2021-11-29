const express = require("express");
const app = express();

const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUI = require("swagger-ui-express")
const swaggerDocument = require("../swagger.json");
const specs = swaggerJsDoc(swaggerDocument);

const cors = require("cors");

app.use(cors({
    origin:"*"
}))

// const { response } = require("express");
const userRoutes = require("./users");
const productRoutes = require("./products");

app.use("/users", userRoutes); //end point
app.use("/products", productRoutes); //end point

/* MENSAJE /pong) DE PRUEBA */
/**
 * @swagger
*paths:
*  /ping:
*    get:
*      tags:
*      - "ping"
*      summary: "get pong message test"
*      description: ""
*      consumes:
*      - "application/json"
*      - "application/xml"
*      produces:
*      - "application/xml"
*      - "application/json"

*      responses:
*        "405":
*          description: "Invalid input"
*      security:
*      - petstore_auth:
*        - "write:pets"
*        - "read:pets"
*/
app.get("/ping", (req, resp)=>{
    resp.json({
        "greet": "Hola aplicación corriendo!!!",
        "message":"pong"
    })
}) 
app.use("/", swaggerUI.serve, swaggerUI.setup(specs)) /* se entrega parametos confi en swagger.js al ser llamada la raiz / */

module.exports = app;