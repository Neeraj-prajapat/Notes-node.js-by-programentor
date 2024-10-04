const path = require('path');

//  var filename = 'D:\\Tutorials\\Nodejs\\main.js';                         //? /n for new line /t, /", /' these are called escaped chracter. so, we use \\ at the place of \
//  console.log(path.basename(filename))
//  console.log(path.extname(filename))
//  console.log(path.dirname(filename));
//  console.log(__dirname)


 var fuck = 'D:\\Tutorials\\Nodejs\\hello.html';
 console.log(path.basename(fuck))
 console.log(path.extname(fuck))
 console.log(path.dirname(fuck));


//* For current file information
 console.log(path.basename(__filename))           //? use to find real name of your current working file
 console.log(path.extname(__filename))
 console.log((__filename))                          //? use to find real "full" name of your current working file
 console.log(__dirname)                             //? only file ka directory name dega (file name chod kr)                


 console.log(path.join('users', 'category', 'diagrams', 'flowchart'));   //? users ke annder category ka folder hai fir category ke aander diagrams ka folder hai etc
 console.log(__dirname, 'users', 'category', 'diagrams', 'flowchart');     //? path join with main directory name

 console.log(path.resolve('users', 'category', 'diagrams', 'diagrams', 'flowchart'));


 //? Now, 
 //* console.log(path.resolve('users', 'category', 'diagrams', 'diagrams', 'flowchart'));  =   console.log(__dirname, 'users', 'category', 'diagrams', 'flowchart'); 
 
 //? equal when we add actual filename
 //* console.log(__dirname)/index.js =  console.log((__filename))   


//  var fuck = 'D:\\\\Tutorials\\\\Nodejs\\\\hello.html';
//  console.log(path.normalize(fuck));
//  var fuck = 'D:\\Tutorials..\\Nodejs\\hello.html';
//  console.log(path.normalize(fuck));   
//  var fuck = 'D:\\Tutorials\\Nodejs..\\hello.html';
//  console.log(path.normalize(fuck));

 //? .. in path.join()
//  console.log(path.join('users', 'category', 'diagrams', 'flowchart', '..')); 
//  console.log(path.join('users', 'category', 'diagrams', 'flowchart','..', '..')); 


//? using path.isAbsolute ye batana hai ki tumara path absolute hai ki nhi by giving answer in "Boolean formate"

 var filename = 'D:\\Tutorials\\Nodejs\\main.js';

 console.log(path.isAbsolute(fuck));

 //? using path.parse()

 var filename = 'D:\\Tutorials\\Nodejs\\main.js';
 console.log(path.parse(filename));
 console.log(path.parse(filename).base);
 console.log(path.parse(filename).ext);
 console.log(path.parse(filename).root);