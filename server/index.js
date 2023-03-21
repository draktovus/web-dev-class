const http = require('http');
const path = require('path')
const express =  require('express');
const products = require('./controllers/products');
const app = express();

// 127.0.0.1 is the loopback address
const hostname = '127.0.0.1';
const port = process.env.PORT || 3000;

// Creates a middleware for json.
app
    .use(express.json())
    .use(express.static(path.join(__dirname, '../client/dist')))

// Actions
app
    .get('/', (req, res) => {
        res.send("Hello New Paltz from Express!")
    })
    .use('/api/v1/products', products)

// Catch all (called deep linking)
app.get('*', (req,res) => {
    res.sendFile(path.join(__dirname, '../client/dist/index.html'));
})

app.listen(port, ()=>{
    console.log(`Listening at http://${hostname}:${port}`);
})