var fs = require('fs');

// var data = fs.readFileSync("info.txt", "utf-8");              //? sync lga dene pr ye synchronous behavior show karega
// console.log(data);
// console.log(".....The Ending Statement....")



var data = fs.readFile("info.txt", "utf-8", (err, data) => {
    console.log(data)
});                                                                //? if you remove sync then, it will behave like asynchronous method (yaha data variable use kiya gya hai ek callback function ke aander which stored all information of readFile) 
console.log(data);
console.log(".....The Ending Statement....")


