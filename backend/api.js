const dotenv = require('dotenv').config();
const app = require('./routes'); /* No se coloca archivo en especial ya que dentro de la carpeta rout hay un archivo index y el sistema toma este por defecto */

const port = process.env.PORT  || 5001  /* LOS || SE UTILIZAN PARA INDICAR EL PUERTO POR DEFAULT EN CASO DE QUE EN LA VARIABLE PORT NO VENGA NINGUNO */
const url = process.env.DB_HOST;
const server = app.listen(port, ()=>{
    let host = server.address().address;
    // let port = server.address().port; /* la variable port se toma de la linea 4 */
    if(process.env.NODE_ENV !== "production") console.log("Server listening at http://",url,host,port);
});