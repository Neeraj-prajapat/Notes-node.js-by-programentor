// let a =20;
// let b = 30;

// let res = a+b;

// console.log(res)


// const lib = require("./library.js");

// const res = lib.Add(10,5)
// const Sub = lib.Subtract(10,5)

// console.log(res)
// console.log(Sub)
// console.log(lib.num)


// const {Add, Subtract, num} = require('./library.js')            //? you can also use this way to import called Destructuring syntax
// const exp = require('express')

// const res = Add(10,5)
// const Sub = Subtract(10,5)

// console.log(res)
// console.log(Sub)
// console.log(num)


// const fs = require('fs')

// fs.writeFileSync ("hello.js", "Dummy Text");


const fs = require('fs').writeFileSync;  //? If you are using single then, you can also write as like this

fs("hello.js", "Dummy Text");

console.log("Programentor")
