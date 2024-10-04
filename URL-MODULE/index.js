const url = require('url')
const http = require('http');

http.createServer((req, res) => {

const myURL = url.parse(req.url, true);
 res.write('Response From Server..');
 console.log(myURL.search);
 console.log(myURL.pathname);
res.end();

}).listen(3000, 'localhost', () => {
    console.log('Our Server is up and running at http://localhost:3000');
})







// var adr = 'https://www.example.com/category/search?name=Ali&Age=23#section3'

// const myURL = url.parse(adr, true);

// console.log(myURL.protocol);
// console.log(myURL.host);
// console.log(myURL.hash);
// console.log(myURL.search);
// console.log(myURL.pathname);



