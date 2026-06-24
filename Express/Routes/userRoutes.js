let http = require("http");
let express = require("express");
//functions addNewUser, findUserById will be imported into userRoutes
let usercontroller = require("../controllers/usercontroller");

let router = express.Router();

//localhost:8000/user
router.get("/", (req, res)=>{
    res.send("User Default Path...");
})

//localhost:8000/user/home
router.get("/home", (req, res)=>{
    res.send("User Home Path...");
})


//localhost:8000/user/addNew
// userController.addNewUser - this function handles the request
router.get("/addNew", usercontroller.addNewUser);

//localhost:8000/user/findUser
router.get("/findUser/:uid", usercontroller.findUserById);


module.exports = router;