let mongoose = require("mongoose");

// also write database name in the connection string
const mongoURI = "mongodb://localhost:27017/MongoDB1";
mongoose.connect(mongoURI)
.then(()=>{
    console.log("Connected to MongoDB Server");
})
.catch((error)=>{
    console.log("MongoDB Connection Error : ", error);
})

module.exports = mongoose;
