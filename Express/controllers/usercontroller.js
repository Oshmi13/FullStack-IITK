//functions that handles request and response

//controller
//Requests are handled here
const addNewUser = function(req,res)
{
    res.send("User Added Successfully..");
}

//controller
//Requests are handled here when this function is called
const findUserById = function(req,res)
{
    res.send("User Data..." + req.params.uid);
}

module.exports = {addNewUser, findUserById};

/* 
    perform
    npm list
    npm list -g
    npm install express
    npm install nodemon
    npm init
    PS C:\Users\HP\Desktop\FullStack\Middleware>npm install express

                                             
*/ 