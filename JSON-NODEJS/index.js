const fs = require('fs')
const bioData ={
    name: "vinod",
     age: 26,
    channel: "thapa technical",
};



//!  Learning 
//const jsonData = JSON.stringify(bioData);        //? this will convert (stringify) "object into json"
//console.log(jsonData)
//console.log(jsonData.channel)                   //* we cannot obtained a particular data by ".channel" in json


//const objData = JSON.parse(jsonData);       //? this will convert (parse) "json into object"
//console.log(objData)
//console.log(objData.channel)

//! Practical Approach
// 1: convert to JSON
// 2: DUSERE FILE ME ADD KRDA HAI
// 3: readfile
// 4: again convert back to js object
// 5: console.log


//! Practical
const jsonData = JSON.stringify(bioData);
fs.writeFile('json1.json', jsonData, (err) => {
    console.log("done");
})

fs.readFile("json1.json", "utf-8", (err, data) => {
    console.log(data);
    const orgData = JSON.parse(data);
    console.log(orgData);
})
 
