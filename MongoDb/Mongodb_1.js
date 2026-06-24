db.emp_data.insertOne(
    {
        emp_id:1001,
        emp_nm:'Sachin',
        emp_sal:56700.50
    }
)
db.emp_data.insertOne(
    {
        emp_id:1001,
        emp_nm:'Sachin',
        emp_sal:56700.50
    }
)
db.emp_data.insertMany(
[
    {
        emp_id:1001,
        emp_nm:'Rahul',
        emp_sal:15700.50,
        emp_age:34
    }, //object 1
    {
        emp_id:1003,
        emp_nm:'Riya',
        emp_sal:61700.50,
        emp_age:34,
        hoobies:['Swim','Play','Read']
    },//object 2
    {
        emp_id:1003,
        emp_nm:'ayush',
        emp_sal:71700.50,
        emp_age:34,
        hoobies:['Chess','Sleep','Dance'],
        addr: {
                house_no:101,
                area_name:'Civil Lines',
                city:'Mumbai'
             }//object under object, embedded object
    }

])
//Syntax : db.CollNmae.find({Selection_condition}, {Projection})

db.emp_data.find({},{
    //feild names that we dont want from the documents

    addr:0 ,//feild name which will not be present in the result document,which we dont want
    hoobies:0,
    _id:0
})

db.emp_data.find({},{
    //feild names that we want from the documents

    addr:1,
    emp_id:1,
    emp_nm:1,
    emp_age:1
//     provides you the record from the documents
 })
// Always it will provide _id value

//ERROR
db.emp_data.find({},{
    //feild names that we dont want from the documents

    addr:0 ,//feild name which will not be present in the result document,which we dont want
    hoobies:0,
    addr:1,
    emp_id:1,
    _id:0
})
//NO ERROR WHEN _id:0
db.emp_data.find({},{
    //feild names that we want from the documents

    addr:1,
    emp_id:1,
    emp_nm:1,
    emp_age:1,
    _id:0
//     provides you the record from the documents
})

//selection-criteria
//want specific user name/record
db.emp_data.find({
    emp_nm:'Rahul'
})

db.emp_data.find({},{
    emp_age:'34'
})

db.emp_data.find({
    emp_nm:{ $eq:"Virat"}
})

db.emp_data.find({},{
    emp_sal:{ $gt:55000}

})

db.emp_data.find({
    //The $in operator is used to match documents where the field's value is present in a given array of values.
    emp_id:{ $in: [1001,1010,1005,1020]}
    
})

db.emp_data.find({
    //$and Matches documents where all conditions are true.
    $and: [{ emp_id: 1001},{emp_nm:'Sachin'}]
    
})

db.emp_data.find({
    // $or Matches documents where at least one condition is true.
    $or: [{ emp_id: 1007},{emp_nm:'Sachin'}]
    
})

db.emp_data.find({

    $and: [{ emp_age: {$gte:30}},{emp_age: {$lte:50}}]
    
})

db.emp_data.find({

    emp_sal:{$gte: 60000}
    
})
db.emp_data.find({

    emp_sal:{ $not: {$gte: 60000} }
    
})//

// same as above emp_sal is not greater than 60000.
// OR emp_sal does not exist.

db.emp_data.find({

    emp_sal :{$lte: 60000} 
    
})

db.emp_data.find({
    //The $exists operator is used to check whether a field exists in a document.
    emp_sal :{$exists: true, $gte:50} 
    
})

db.emp_data.find({

    emp_nm : 'ayush'
    
})

db.emp_data.find({

    "addr.house_no" : 101
    
})
//nested or embedded document, then we need to wrao feild name by double qoutes

db.emp_data.find({

    hobbies : "Play"
    
})

db.emp_data.find({

    hobbies : { $type :"int"}
    
})

db.emp_data.updateOne({emp_id:1001},{$set:{emp_sal:60000}})
db.emp_data.updateOne({emp_id:1001},{$set:{emp_sal:58000}, emp_age:35})

// $and - more than one condition
//if one of the condition is wrong then no modifications
db.emp_data.updateOne( {$and :[{emp_id:1001},{emp_nm:'Joe'}]},{$set:{emp_sal:58000}, emp_age:35})

db.emp_data.updateOne( {$and :[{emp_id:1051},{emp_nm:'Joe'}]},{$set:{emp_sal:58000}, emp_age:46}, {upsert:true})
// upsert- To insert new record when both the conditions do not match, the new document is created with the data written in the code.

db.emp_data.updateOne( {},{$set:{emp_mob:88988888}})
// New feild is added in the first document

db.emp_data.updateMany( {},{$set:{emp_mob:88988888}})
// new feild will be added in all documents and the document with mob no. will also get updated

//Rename
db.emp_data.updateMany( {},{$rename:{'emp_nm':'emp_name'}})

//unset - to remove feild
db.emp_data.updateMany( {emp_id : 1015},{$unset:{emp_mob:''}})
db.emp_data.deleteOne({emp_id:1015})

db.emp_data.find().skip(2)
db.emp_data.find().sort({emp_id:1})
db.emp_data.find().sort({emp_id:-1})

db.emp_data.find().sort({emp_age:1,emp_name:1})

//interview
db.emp_data.find().sort({emp_sal:1})

db.emp_data.find().sort({emp_sal:-1}).skip(2).limit(1)

db.DateDemo.insertMany([
    {
        msg:"Date with 'Date()'",
        dateOfJoining: Date()
    },
    {
        msg:"Date with 'new Date()'",
        dateOfJoining: Date()
    },
    {
        msg:"Date with 'ISO Date()'",
        dateOfJoining: ISODate()
    }
])
db.DateDemo.find()
db.DateDemo.find({dateOfJoining:{$type:'date'}})
db.DateDemo.insertOne({
    msg:"date of Birth",
    dateOfJoining:ISODate('2000-06-11')
})

//projection is only used for
db.DateDemo.find({ dateOfJoining : { $type : 'date'}},{
    JoiningDate:{
        $dateToString:{
            // $dateOfJoining- $ will create it a feild name
            date: "$dateOfJoining",
            format:'%d-%m-%y %H:%M:%S',
            timezone: "Asia/Kolkata"
            
        }
    }
})

db.employees.aggregate(
    [
            // 1st stage
            // used for filtering records
        {
            $match:{$and:[{gender :"male" , salary:{$gte:70000}}]}
        }, // 2nd stage
        {
            $project:{_id:0,firstName:1,lastName:1,salary:1,gender:1}
        }
    ]
)
//same as grouping
db.employees.aggregate(
    [
       {    

        $group:{_id:'$gender'}
            
        }
    ]
)
db.employees.aggregate(
    [
       {    

        $group:{_id:'$department.name', TotalEmp : {$sum:1}}
        // TotalEmp : {$sum:1} used for counting no of employees.
        }
    ]
)
db.employees.aggregate(
    [
       {    

        $group:{
            _id:'$department.name',
            TotalEmp : {$sum:1},
            TotalSalaryDepartmentWise : {$sum:"salary"},
            AverageSalary: {$avg:"$salary"},
            MaximumSalary : {$max : "$salary"},
            MinimumSalary : {$min : "$salary"}
        
        }
        },
        {
            $sort:{TotalEmp:1,_id:1}
            //$sort:{TotalEmp:1} - decending order print
        },
        {
            $limit:2
        }
        
        
    ]
)

db.employees.aggreagte([
    {
        $sample:{size:3}
    }
])

db.employees.aggregate(
    [   
        {
            $match:{gender:"male"}
        },
       {    

        $group:{
            _id:'$department.name',
            TotalEmp : {$sum:1},
            TotalSalaryDepartmentWise : {$sum:"salary"},
            AverageSalary: {$avg:"$salary"},
            MaximumSalary : {$max : "$salary"},
            MinimumSalary : {$min : "$salary"}
        
        }
        },
        {
            $sort:{TotalEmp:1,_id:1}
            //$sort:{TotalEmp:1} - decending order print
        },
        {
            $limit:3
        },
        {
            $sample:{size:1}
        }
        
        
    ]
)

db.employees.aggregate([
    {
        $sortByCount:'$department.name'
    }
])

db.newCollection.insertMany(
    [
        {
            _id:1001,
            name:'Sachin',
            age:45,
            hobbies:["Swim","Dance","Read"]
        },
        {
            _id:1002,
            name:'Rahul',
            age:47,
            hobbies:["Play","Dance"]
        },
        {
            _id:1003,
            name:'Robin',
            age:50,
            hobbies:[]
        }
    ]
)
//show collections

db.newCollection.aggregate([
    {
        $unwind:{
            path:'$hobbies',
            includeArrayIndex:'Index',
            preserveNullAndEmptyArrays:true
        }
    }
])
//import records
db.empData.find({age:{$gte:39}}).explain()
//explains the query
db.empData.getIndexes()
db.empData.find({age:{$gte:39}}).explain("executionStats")
db.empData.createIndex({age:1}) //age_1


db.empData.createIndex({age:1})
// 13 sept

db.empData.find
