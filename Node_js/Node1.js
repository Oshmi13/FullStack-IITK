// 1.
//let msg = "Hello";
//module.exports = msg;

//2.
// let name = "Oshmi";
// let age = 21;
// module.exports = [name, age];

// module.exports = { name : name, age : age }

//3.
// function myAdd(a , b)
// {
//     return(a+b);

// }
// module.exports = myAdd; // Do not add brachets bcoz we are not calling function , we are exporting

//4.
function myAdd(a , b)
{
    return(a+b);

}
function mySub(a , b)
{
    return(a-b);

}
module.exports = [myAdd, mySub]; // array
module.exports = {myAdd, mySub}; // object
