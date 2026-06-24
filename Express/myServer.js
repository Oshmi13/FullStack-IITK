let http =  require("http");
let express = require("express");
let path = require("path");
let app = express();
let bodyParser = require("body-parser");
let db = require("./dbConn");
const EmpModel = require("./models/empModel");
const session = require("express-session");

const PORT = 8000 ;
const HOST = "localhost" ;

app.use(express.static(path.join(__dirname,"public")));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine","ejs");
app.use(session({
    secret : "mySecret",
    cookie : { secure:false }
}));

// Do not maintain the cache
app.use((req, res, next)=>{

    res.set("Cache-Control" , "no-store");
    next();

});



// Function is returning middleware
const checkSecureLogin = function (role)
{  
   return (req,res,next)=>{

        if(req.session.userInfo && req.session.userInfo.role === role)
            next();
        else
            res.status(403).redirect("/login");
    }   
}

// localhost:8000/user
let userRoutes = require("./Routes/userRoutes");
app.use("/user" , checkSecureLogin("user") ,userRoutes);
// checkSecureLogin("user")  - other pages can only be accessed if user has login 

// localhost:8000/admin
let adminRoute = require("./Routes/adminRoutes");
app.use("/admin" , checkSecureLogin("admin")  ,adminRoute);

app.get("/home",(req,res)=>{

    // console.log(__dirname+"\\views");    
    // res.sendFile('./views/HomePage.html');
    // res.send("Welocme User....");
    //console.log(path.join(__dirname,"views","HomePage.html"));
    // res.sendFile(path.join(__dirname,"views","HomePage.html"));
   
    let name = "Sachin";
    res.render("HomePage.ejs",{userName : name , age : 45 , hobbies:["Swim" ,"Play" ,"Dance"] , address:{flatNo:203,area:"Civil Lines"}  });

});
// localhost:8000/about
app.get("/about",(req,res)=>{

    // res.sendFile(path.join(__dirname,"views","AboutUs.html"));
    
    res.render("aboutPage.ejs");

});


// localhost:8000/register
app.get("/register",(req,res)=>{

    res.sendFile(path.join(__dirname,"views","RegisterPage.html"));

});

// localhost:8000/contact
app.get("/contact",(req,res)=>{

    res.render("contactPage.ejs",{num:10});

});

app.get("/login",(req,res)=>{

    res.render("loginPage.ejs",{success:null,message:null});

});

// Login 
app.post("/login", async (req,res)=>{

    const { mailId , pwd } = req.body;

    const user = await EmpModel.findOne({EmpEmail:mailId ,EmpPassword:pwd });    
    if(user)
    {
        
        // sessions has containers have session variables
        // userInfo = session variable
        // req.session.userInfo.EmpName - To access name
        req.session.userInfo = user ;
        const url = (user.role === "admin") ? "/admin" :"/user";
        res.redirect(url);
    }
    else
    {
        res.render("loginPage.ejs",{success:false,message:"Invalid user Id or Password..."});
    }

    app.get("/logout",(req,res)=>{

        req.session.destroy(()=>{
            res.redirect("/login");
        });
    });


});


// localhost:8000/displayData
app.get("/displayData",(req,res)=>{

    let userData = [
        { "_id": 1, "name": "John Doe", "age": 35, "gender": "male" },
        { "_id": 2, "name": "Jane Smith", "age": 40, "gender": "female" },
        { "_id": 3, "name": "Michael Johnson", "age": 45, "gender": "male" },
        { "_id": 4, "name": "Emily Williams", "age": 30, "gender": "female" },
        { "_id": 5, "name": "Robert Brown", "age": 38, "gender": "male" },
        { "_id": 6, "name": "Emma Jones", "age": 33, "gender": "female" }
    ];


    res.render("displayData.ejs",{userData});

});


app.listen(PORT,HOST,(err)=>{

    if(!err)
        console.log(`Server Running at http://${HOST}:${PORT}`);
    else
        console.log("Error Ocuured...");       

});


// Download npm i express-session
// sessions are created for each and every user
// These sessions are created on bthe servers and all data are stored in the sessions
// A container is made under session and variables are created under them.
// Session is implemented so that user specific data can be written and saved on the server.
// Major adv - The data saved on these sessions can be accessed throughout
// sessions has containers have session variables
// web pages can only be assessed when session is created