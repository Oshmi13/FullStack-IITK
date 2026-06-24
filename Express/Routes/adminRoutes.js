let express = require("express");
let adminController =  require("../controllers/adminController");
let router = express.Router();

router.use((req,res,next)=>{
    console.log("Admin Middleware...");
    next();
    
})
//localhost:8000/admin
router.get("/",(req,res)=>
{
    res.send("Admin Default ....");
})

//localhost:8000/admin/home
router.get("/home",(req,res)=>
{
        res.send("Admin Home ....");
})

//localhost:8000/admin/register    
router.get("/register",adminController.registerUser);    
router.post("/register",adminController.formHandler);    
router.get("/viewAllemp",adminController.viewAllEmployees); 

//localhost:8000/admin/edit/67cd319d37b04450880e5322 
router.get("/edit/:eid", adminController.editRecord ) ;

//localhost:8000/admin/update
router.post("/update", adminController.updateRecord )  ;

//localhost:8000/admin/delte
router.get("/delete/:eid", adminController.deleteRecord )  ;




module.exports = router;    