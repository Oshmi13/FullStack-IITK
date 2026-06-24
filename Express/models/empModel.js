// model == schemma

let mongoose = require("mongoose");

let empSchema = new mongoose.Schema({

    EmpName:{type:String ,required :true } ,
    EmpEmail:{type:String ,required :true } ,
    EmpPassword:{type:String ,required :true } ,
    EmpDOB:{type:Date ,required :true } ,
    isActive:{type:Boolean , required :true , default : true } ,
    regTime:{type:Date , required :true , default : Date.now } ,
    // administrator never register
    role : {type : String, enum : ["user", "admin" ], default:"user"}
});

const EmpModel = mongoose.model("EmployeeData",empSchema);

module.exports = EmpModel;