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
    else if(req.url === '/userapi'){
        fs.readFile(`${__dirname}/UserAPI/api.json`, "utf-8", (err, data) => {
            console.log(data);
            res.write(data);
            res.end();  
            // const objData =JSON.parse(data);
            // res.end(objData[2].name)
        })
    }
    else{
        res.writeHead(404, { "Content-type": "text/html"});
        res.end('<h1>404 Page Not Found</h1>');
    }


}).listen(3000, 'localhost', () => {
    console.log(('Server is up running at http://localhsot:3000'))
});





















const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {

    const data = fs.readFileSync(`${__dirname}/UserAPI/api.json`, "utf-8")       //? this will work as "sync" means data ek hi baar fetch hoga
        const objData = JSON.parse(data);


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
    else if(req.url === '/userapi'){
        res.writeHead(200, { "Content-type" : "application/json"})    
        res.end(objData[2].name)
    
    }
    else{
        res.writeHead(404, { "Content-type": "text/html"});
        res.end('<h1>404 Page Not Found</h1>');
    }


}).listen(3000, 'localhost', () => {
    console.log(('Server is up running at http://localhsot:3000'))
});

