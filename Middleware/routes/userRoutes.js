let express = require("express");
let router = express.Router();

const userData = [
    
       { uid: 1001, name : "Sachin"},
       { uid:1002, name: "Virat"}
    
];

router.get("/:id", (req, res)=>{
    
    let userid = req.params.id;
    let user = userData.find(user => user.uid == userid);
    if(!user)
    {
        const error = new Error("user not found");
        return next(error);
    }
    //res.send(user);
    //res.status(200).json(user);
    //More professional way
    res.status(200).json({success:true, message:"Data Fetched, data:user"});
});

router.use((err, req, res, next)=>{
    res.send("Error...");
});

module.exports = router;
