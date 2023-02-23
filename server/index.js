const http = require('http');
const express =  require('express');
const app = express();

// 127.0.0.1 is the loopback address
const hostname = '127.0.0.1';
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send("Hello New Paltz from nodemon!")
})

app.listen(port, ()=>{
    console.log(`Listening at http://${hostname}:${port}`);
})

/*
const server = http.createServer((req,res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello New Paltz!\n');
});

server.listen(port, () => {
    console.log(`Server running at http://${hostname}:${port}`);
});
*/
