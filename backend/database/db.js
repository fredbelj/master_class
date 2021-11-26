const mgdb = require("mongoose");
mgdb.connect("mongodb://localhost:27017/masterclassuno", (err, db)=>{
    if(err) throw err;
    console.log("Success!!! Database conocted");
});
module.exports = mgdb;