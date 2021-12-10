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

router.route("/search") /* recurso search - end point*/
    /**
     * @swagger
     * /users/search:
     *  get:
     *   description: response the pong message
     *  responses:
     *   200:
     *    description: {"message","pong"}
     */
    .get((req, resp)=>{
        const {name} = req.query;
        mgdb.model("Users").find({"name.firts":name}, (err, users)=>{
        if(err) throw err;
        resp.json(users)
        })
    })
router.route("/") /* Recuros user - end point-*/
    /**
     * @swagger
     * /users:
     *  get:
     *      summary: Returns a list of users.
     *      description: Contactame send first 100 users in DB as arrayt the objects.
     *  responses:
     *      200:
     *          description: A User object.
     *          schema:
     *              type: object
     *              properties:
     *                  id:
     *                      type: ObjectId
     *                      example: 619fc8ca9b4b0c1468536c23
     *      400:
     *          description: The specified user ID is invalid (e.g. not a number).
     *      404:
     *          description: A user with the specified ID was not found.
     *      default:
     *          description: Unexpected error
     */
    .get(function(req, resp){
        mgdb.model("Users")
        .find({})
        .limit(100)
        .exec((err, users)=>{
            if(err) throw err;
            resp.json(users)
        })
    })
        /**
     * @swagger
     * /users:
     *  post:
     *   description: response the pong message
     *  responses:
     *   200:
     *    description: {"message","pong"}
     */
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


router.route("/:id") /* recurso id */
    /** 
     * @swagger
     * paths:
     *  /users/{id}:
     *  get:
     *      summary: Returns a user by ID.
     *    parameters:
     *      - in: path
     *      name: id
     *      required: true
     *      type: ObjectId
     *      minimum: 1
     *      description: The ID of the user to return.
     *    responses:
     *       200:
     *          description: A User object.
     *          schema:
     *              type: object
     *              properties:
     *              id:
     *                  type: ObjectId
     *                  example: 619fc8ca9b4b0c1468536c23
     *       400:
     *          description: The specified user ID is invalid (e.g. not a number).
     *       404:
     *          description: A user with the specified ID was not found.
     *       default:
     *          description: Unexpected error
    */
    .get((req, resp)=>{
        mgdb.model("Users").findById(req.params.id,(error, user)=>{
            if(error){
                console.log("There was a problem 400");
            }else{
                console.log("Retrieving id ", req.params.id);
                console.log(user);
                resp.json((user));
            }
        })
    })
        /**
     * @swagger
     * /users/id:
     *  put:
     *   description: response the pong message
     *  responses:
     *   200:
     *    description: {"message","pong"}
     */
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
        /**
     * @swagger
     * /users/id:
     *  delete:
     *   description: response the pong message
     *  responses:
     *   200:
     *    description: {"message","pong"}
     */
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