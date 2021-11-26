const   mgdb = require("mongoose");
const userSchema = new mgdb.Schema(
    {
        full_name:{
            type:String,
            required:true,
            trim:true, /* quita los espacios al final y al inicio */
        },

        phone:{
            type:String,
            required: true
        },
        
        address:{
            type:String,
            required: true,
        },

        mail:{
            type:String,
            required:true,
            unique:true,
        },
    }
);
mgdb.model("Products",userSchema);