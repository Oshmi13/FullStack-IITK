let http = require("http");

const HOST = 'localhost'; // 127.0.0.1 (IP address of local host)
const PORT = '8000';

//function handles the request
const requestListener = function(req, res)
{   
    if(req.url == "/") 
    {
        res.setHeader("Content-type","text/plain");
        res.setHeader("Cache-Control","no-cache");
        res.statusCode = 200;
        res.write('Welcome user..');
        res.end();
    }
    else if(req.url == "/home")
    {
        res.setHeader("Content-Type","text/html");
        res.statusCode = 200;
        res.write("<hr color = 'orange'/ >");
        res.write("<h1 align = 'center'> Home Page </h1>");
        res.write("<hr color = 'green'/ >");

        //creating a hyperlink to open newuser webpage
        // Use that webpage's URL as href
        res.write("<a href ='/newuser' > New User </a>")
        res.end();
    }
    else if(req.url == "/newuser")
    {
        res.writeHead(200,{"Content-Type":"text/html"});
        res.write("<hr color = 'orange'/ >");
        res.write("<h1 align = 'center'> Register New User </h1>");
        res.write("<hr color = 'green'/ >");
        // post - jab data dala jata hai, get - jab data lena hota hai
        res.write("<form method ='post' action = '/userData'>");
        res.write("<input type ='text' name='unm' placeholder='Enter Name'>  <br /> ");
        res.write("<input type ='submit' name='subBtn' >  <br /> ");
        res.write("</ form>");
        res.end();
    }

    else if(req.url=='/userData' && req.method == "POST")
    {
       
        res.setHeader("Content-Type","text/plain");
        res.statusCode = 302;
        // res.write("Data Received ");
        res.setHeader("Location","/"); //Request is redirected to this location, that is why after posting the form 1st webpage will be loaded - location " /"
        res.end();
    }
    else if(req.url == '/about')
    {
        res.setHeader("Content-Type","application/json");
        res.statusCode = 200;
        res.write(JSON.stringify({nm : " Khushi, age : 21"}));
        res.end();

    }

    
}
// To see the request
// webpage -> inspect -> Network -> localhost -> header
// Status code - souce not found 404
//             - 200 ok when the request is sent and response is returned successfully

const server = http.createServer(requestListener);
server.listen(PORT, HOST , ()=>{

    //when server starts to listen at ithis particulat PORT, then this callback function is executed
    console.log(`server running at http://${HOST}:${PORT}`)
})
// to send the request click on the URL on the search bar and press enter
// Ctrl + C to terminate the server
// Application is deployed on a server

/* 
    console.log(req.url, req.method, req.header);  -  
    / GET undefined  [output]
    '/ ' suggests the url is default, GET type method, undefined header

*/

// localhost:8000/home 
// Now the URL is changed and the request is also changed
// To get out from a file - cd..
// To create a new Folder - mkdir folder_name