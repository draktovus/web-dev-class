const express = require('express');
const model = require('../models/products')
const router = express.Router();

router
    .get('/', (req,res) => {
        const list = model.getProducts();
        res.send(list)
    })

    .get('/search/:q', (req, res) => {
        const term = req.params.q;
        console.log(term)
        const list = model.searchProduct(term);
        res.send(list)
    })

    .get('/:id', (req,res) => {
        const id = +req.params.id
        const product = model.getProductById(id);
        res.send(product)
    })

    .post('/', (req,res) => {
        const product = req.body;

        console.log(req.query)
        console.log(req.headers)
        console.log(req.body)

        model.addProduct(product);
        res.send(product);
    })

    .patch('/:id', (req,res) => {
        const product = req.body;
        model.updateProduct(product);
        res.send(product)
    })

    .delete('/:id', (req,res) => {
        const id = +req.params.id
        model.deleteProduct(id);
        res.send(id.toString());
    })

module.exports = router;

/* ways to pass information to the server
* 1. query string
* 2. body
* 3. url parameters
* 4. headers
* 5. cookies
*/