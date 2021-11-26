const   mgdb = require("mongoose");
const nameSchema = new mgdb.Schema({
    title:String,
    firts:String,
    last:String

});

const idSchema = new mgdb.Schema({
    type:String,
    value:String
});

const pictureSchema = new mgdb.Schema({
    large:String,
    small:String,
    thumbnail:String
});

const userSchema = new mgdb.Schema({
    id:idSchema,
    name:nameSchema,
    gender:String,
    email:{
        type:String,
        require:true,
        trim:true /* quita los espacios al final y al inicio */
    },
    phone:{
        type:String,
        require: true
    },
    cell:String,
    address:{
        type:String,
        require: true
    },
    birth_date:String,
    picture:pictureSchema    
});
mgdb.model("Users",userSchema);