const http = require('http');
const express =  require('express');
const products = require('./controllers/products')
const app = express();


// 127.0.0.1 is the loopback address
const hostname = '127.0.0.1';
const port = process.env.PORT || 3000;

app
    .get('/', (req, res) => {
        res.send("Hello New Paltz from Express!")
    })
    .use('/products', products)


app.listen(port, ()=>{
    console.log(`Listening at http://${hostname}:${port}`);
})