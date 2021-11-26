const mgdb = require("mongoose");
const express = require("express");

const db = require("../database/db"),
      usersModel = require("../database/users");

const router = express.Router();

router.use(express.json());
router.use(express.urlencoded({
    extended:true,
    limit: '20mb'
}));

router.route("/search")
    .get((req, resp)=>{
        const {name} = req.query;
        mgdb.model("Users").find({"name.firts":name}, (err, users)=>{
        if(err) throw err;
        resp.json(users)
        })
    })
router.route("/user")
    .get(function(req, resp){
        mgdb.model("Users").find({}, (err, users)=>{
            if(err) throw err;
            resp.json(users)
        })
    })
    .post((req, resp)=>{
        // console.log("este es el body: ",req.body);
        mgdb.model("Users").create(
        req.body,
        (err, user)=>{
            if(err){
                resp.json({"message":"User does not saved!"});
                console.log("error whe save ", user);
            }else{
                console.log("saved ", user);
                resp.json(user);
            }
        })
    })


router.route("/:id")
    .get((req, resp)=>{
        mgdb.model("Users").findById(req.params.id,(error, user)=>{
            if(error){
                console.log("There was a problem", error);
            }else{
                console.log("Retrieving id ", req.params.id);
                console.log(user);
                resp.json((user));
            }
        })
    })
    .put((req, resp)=>{
        mgdb.model("Users").findById(req.params.id,(error, user)=>{
            if(error){
                console.log("There was a problem", error);
            }else{
                console.log("Updating id", req.params.id);
                user.updateOne(req.body, (error, data)=>{
                    if(error) resp.json({"message": "Has been NOT updated"})
                    //console.log(data);
                    console.log(req.body);
                    console.log("este el el ususario\n",user);
                    resp.json({
                        "_id":user._id,
                        "message": "Has been update"
                    })
                })
            }
        })
    })
    .delete((req, resp)=>{
        mgdb.model("Users").findById(req.params.id,(error, user)=>{
            if(error){
                console.log("There was a problem", error);
            }else{
                console.log("Deleting id ", req.params.id);
                user.remove((error, user)=>{
                    if(error) resp.json({"message": "Has been NOT deleted"})
                    resp.json({
                        "_id":user._id,
                        "message": "Has been deleted"
                    })
                })
            }
        })
    })

module.exports = router;