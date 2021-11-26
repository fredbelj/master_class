const mgdb = require("mongoose");
const express = require("express");

const db = require("../database/db"),
      product = require("../database/products");

const router = express.Router();

router.use(express.json());
router.use(express.urlencoded({extended:true}));

router.route("/")
    .get(function(req, resp){
        mgdb.model("Products").find({}, (err, products)=>{
            if(err) throw err;
            resp.json(products)
        })
    });
    /*.post((req, resp)=>{

    })*/


router.route(":/id")
    .get()
    .put()
    .delete()

module.exports = router;