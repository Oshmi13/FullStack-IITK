// we want to use the content of file Node1.js in current file
// use "require" function

//1.
// let msg = require("./Node1")
// console.log(msg);

//2.
// let a = require("./Node1")
// console.log(a);
// console.log(a[0]);
// console.log(a[1]);

// 3.
//Destructuring
// let [nm, a] = require("./Node1");
// console.log(nm);
// console.log(a);

//4.
// let{ age, name} = require("./Node1");
// console.log(name);

//5.
// let a = require("./Node1")
// console.log(a(1,2));

// 6.
let a = require("./Node1")
console.log(a[0](1,2));
console.log(a[1](1,2));

//7.
let a = require("./Node1")
console.log(a);
console.log(a.myAdd(4,5));
