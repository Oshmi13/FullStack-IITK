
const EmpModel = require("../models/empModel");

const registerUser = function(req,res)
{
    res.render("register.ejs",{success:null});
}

const formHandler = async function(req,res)
{
    // console.log("Form Handler...");    
    // console.log(req.body);   
   try{
        let newEmp = new EmpModel({

            EmpName:req.body.enm,
            EmpEmail:req.body.mailId,
            EmpPassword:req.body.pwd,
            EmpDOB:req.body.dob,
            //role:"admin"
        });

        const saveEmp = await newEmp.save();  
        console.log(saveEmp);          

        res.status(201).render("register.ejs",{success:true,message:"Record Inserted Successfullly", data:saveEmp});
    }
    catch(Error)
    {
        res.status(400).render("register.ejs",{success:false,message:"Error :" + Error});
    }
}

const viewAllEmployees = async function(req,res)
{     
    try{   

        const allEmp = await EmpModel.find();
        // console.log(allEmp);  
        if(allEmp)      
            res.status(200).render("viewAllemp.ejs",{allEmp});
        else
            return res.status(404).render("viewAllemp.ejs" , { success : false, message: 'User not found' });
    }
    catch(Error)
    {
        res.status(400).render( "viewAllemp.ejs" ,{ success : false, message: 'Invalid User ID' });
    }
}

// const editRecord = function(req,res)
// {
//     res.render("editRecord.ejs");
// }

const editRecord = async function(req,res)
{
    try{   

        const Emp = await EmpModel.findById(req.params.eid);
        console.log(Emp);        
        res.status(200).render("editRecord.ejs",{success:null, Emp});
    }
    catch(Error)
    {
        res.status(400).render( "editRecord.ejs" ,{ success : false, message: 'Error Occured' });
    }      
    
}

const updateRecord = async function(req, res) {
    try {
        const updatedFields = {
            EmpPassword: req.body.pwd,
            EmpName: req.body.name,     // <-- Update Name
            EmpEmail: req.body.email    // <-- Update Email
        };

        let updatedEmp = await EmpModel.findByIdAndUpdate(
            req.body.eid,
            updatedFields,
            { new: true } // Returns the updated document
        );

        if (updatedEmp)
            res.status(200).render("editRecord.ejs", { 
                success: true,
                message: 'User updated Successfully',
                Emp: updatedEmp 
            });
        else
            return res.status(404).render("editRecord.ejs", { 
                success: false,
                message: 'User Not Found' 
            });

    } catch (error) {
        res.status(400).render("editRecord.ejs", { 
            error: "Error Occurred" 
        });
    }
};


const deleteRecord = async function(req,res)
{
    try{   

        const Emp = await EmpModel.findByIdAndDelete(req.params.eid);
        console.log(Emp);   
        res.redirect("/admin/viewAllemp");     
        //res.status(200).render("viewAllemp.ejs",{success:null, Emp});
    }
    catch(Error)
    {
        res.status(400).render( "viewAllemp.ejs" ,{ success : false, message: 'Error Occured' });
    }      
    
}

module.exports = { registerUser , formHandler , viewAllEmployees, editRecord ,updateRecord , deleteRecord}