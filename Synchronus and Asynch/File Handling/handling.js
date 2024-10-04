var fs = require('fs');

//? How to create file

fs.writeFileSync("data.txt","This is FS Module")

fs.writeFile("data2.txt", "Hello Viewers", (err) => {               //? "data2.txt" at the place of this you can put folder directory (path) 
    if(err) console.log(err);

    console.log("File has been written successfully..")
})




//? How to read file
 
var data = fs.readFileSync("data.txt", "utf-8");
console.log(data);

fs.readFile("data.txt2", "utf-8", (err,data) => {     //? here, data variable ke aander aake sara text(data) stored ho jayega
    if(err)console.log(err);

    console.log(data);
    
})


//? Deleting a file

fs.unlinkSync("data.txt");

//? Renaming a file

fs.renameSync("data1.txt",  "data.txt")

fs.rename("data.txt", "data1.txt", (err) => {
    if(err) console.log(err);
    
    console.log("File has been removed Successfully")
})


//? Copying a file

fs.cpSync("hello.txt", "hello1.txt");

fs.cp("hello.txt", "hello2.txt", (err) =>{
    if(err) console.log(err);
    
    console.log("File has been removed Successfully")
})