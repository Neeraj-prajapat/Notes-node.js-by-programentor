var http = require('http');

// const server = http.createServer((req, res) => {
// res.setHeader("Content-type", "text/plain")    
// res.write('Response From Fuck you baby Server..');
// res.end();
// });

// server.listen(3000, 'localhost', () => {
//     console.log("Server Fucking at http://localhost:3000");
// })

//? Another way to write in short code


http.createServer(function(req, res) {
    res.setHeader("Content-type", "text/plain")    
    res.write('Response From Fuck you baby Server..');
    res.end();
}).listen(3000, 'localhost', () => {
    console.log("Server Fucking at http://localhost:3000");
})