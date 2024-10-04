const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {

    // console.log(req.url);
    if(req.url === '/'){                      //? indentity operator
        res.write('<h1>Hello! How are you? </h1>');
        res.end();
    }                    
    else if(req.url === '/about'){      
        fs.readFile('./about.html', (err, data) => {
            if (err) throw err;
            res.write(data);
            res.end();        
        });                   
    }                    
    else if(req.url === '/contact'){      
        fs.readFile('./contact.html', (err, data) => {
            if (err) throw err;
            res.write(data);
            res.end();        
        });                   
    }    
    else{
        res.write('<h1>404 Page Not Found</h1>');
        res.end();
    }

    
}).listen(3000, 'localhost', () => {
    console.log(('Server is up running at http://localhsot:3000'))
});








// const http = require('http');
// const fs = require('fs');

// http.createServer((req, res) => {
//     // Log the requested URL for debugging
//     console.log(req.url);

//     if (req.url === '/') {
//         res.writeHead(200, { 'Content-Type': 'text/html' });
//         res.write('<h1>Hello! How are you?</h1>');
//         res.end();
//     } else if (req.url === '/about') { // Removed the extra space
//         fs.readFile('./about.html', (err, data) => {
//             if (err) {
//                 res.writeHead(500, { 'Content-Type': 'text/plain' });
//                 res.end('Server Error');
//                 return;
//             }
//             res.writeHead(200, { 'Content-Type': 'text/html' });
//             res.end(data); // Send the HTML data
//         });
//     } else {
//         res.writeHead(404, { 'Content-Type': 'text/plain' });
//         res.end('404 Not Found'); // Handle other routes
//     }
// }).listen(3000, 'localhost', () => {
//     console.log('Server is up and running at http://localhost:3000');
// });
