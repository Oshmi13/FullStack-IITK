let http = require("http");
let express =  require("express");
const {log} = require("console");

const PORT = 8000;
const HOST = "localhost";


let app = express();



//UNDERSTANDING THE FLOW OF RESQUEST AND RESPONSE
//SCENARIO 1
/* 
    1. Request will come at the server 
    2. If handler is present on the server, it will be handled by the Handler
    3. But if Middlewares are present before handler then the code of middleware will also be executed.
*/
//SCENARIO 2
/*
    1. Request is directyed to the server but handler is not present in this file.
    2. Then we mention the routes in the file(server) which contains the location of the file where the handlers of the request is present.

*/

// Error at middleware
app.use("/error", (req, res, next)=>{

    const err = new Error("Error occured...");
    next(err);

})


app.use("/mid" ,(req,res,next)=>{
    console.log("Middleware...");
    res.send("Welcome...");
    next();
})

//Error handling middleware

app.use((err, req , res , next)=>{
    console.log(err);
    res.send("error");
});

// next - passes the request to next middleware
// If next middelware is not present then it will search for handler/method
app.use((req,res,next)=>{
    console.log("Middleware2..");
    next();
})

//localhost:8000/user
//localhost:8000/user/addNewUser
//localhost:8000/user/findUserById
//if the request comes for" user" in the URL then the request is redirected to the file userRoutes bcoz  all its routes are defined in the file userRoutes.
// request directed to userRoutes of Express
const userRoute = require("./routes/userRoutes");
app.use("/user", userRoute);



app.get("/",(req,res)=>{
    res.send("Welcome user");
})

// Handler of localhost:8000/mid
app.get("/mid",(req,res)=>{
    res.send("Welcome user mid");
})


app.listen(PORT, HOST, (err)=>{

    if(!err)
        console.log(`Server Running at http:\\${HOST}:${PORT}`);
    else
        console.log("Error Ocurred..");
});


// To start nodemon - npm start
