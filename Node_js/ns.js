let http = require("http");
let express =  require("express");

let app = express();

const PORT = 8000;
const HOST = "localhost";

app.listen(PORT, HOST, ()=>{

    if(!err)
        console.log(`Server Running at http:\\${HOST}:${PORT}`);
    else
        console.log("Error Ocurred");
});