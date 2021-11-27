const dotenv = require('doteven').config();
const app = require('./routes');

const port = process.env.PORT || 5000 /* LOS || SE UTILIZAN PARA INDICAR EL PUERTO POR DEFAULT EN CASO DE QUE EN LA VARIABLE PORT NO VENGA NINGUNO */

const server = app.listen(port, ()=>{
    let host = server.address().address;
    // let port = server.address().port; /* la variable port se dota de la linea 4 */
    if(process.env.NODE_ENV !== "production") console.log("Server listening at http://",host,port);
});