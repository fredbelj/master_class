const dotenv = require("dotenv").config();
const mgdb = require("mongoose");
console.log("Mensaje desde db.js: ",process.env.DB_HOST);

mgdb.connect(`mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`, (err, db)=>{
    if(err) throw err;
    if(process.env.NODE_ENV !== "production") console.log("Mensaje desde db.js: Success!!! Database conocted");
    console.log("Mensaje desde db.js:",db.name);
});
module.exports = mgdb;