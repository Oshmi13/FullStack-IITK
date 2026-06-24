let http = require("http");

const HOST = 'localhost'; // 127.0.0.1 (IP address of local host)
const PORT = '8000';

//function handles the request
const requestListener = function(req, res)
{   
    console.log(req.url, req.method, req.header);

    res.setHeader("Content-type","text/plain");
    res.setHeader("Cache-Control","no-cache");
    res.statusCode = 200;
    res.write('Welcome user..');
    res.end(); // .end - ends your request and further code is not requested
    // text is returnedas a response
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

/*
Installing Express 

PS C:\Users\HP\Desktop\FullStack\Express_1> npm install express
PS C:\Users\HP\Desktop\FullStack\Express_1> npm list
PS C:\Users\HP\Desktop\FullStack\Express_1> npm list -g
PS C:\Users\HP\Desktop\FullStack\Express_1> npm init
again
PS C:\Users\HP\Desktop\FullStack\Express_1> npm install express
*/
