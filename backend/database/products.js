const   mgdb = require("mongoose");
const productSchema = new mgdb.Schema({
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
});

/* funcion para validar si el modelo ya fue compilado en ambiente de test no lo tenga en cuenta, de lo contrario crea el modelo (Users) */
/* Se usa esta funcion para crea el schema y no afecte cuando se ejecute el ambiente de prueba (nmp.test) */
const checkModel = (modelName)=>{
    mgdb.modelNames().indexOf(modelName) == -1
    ?mgdb.model(modelName, productSchema)
    :mgdb.connection.model(modelName)
};
checkModel("Products")