const express = require('express');
const model = require('../models/products')
const router = express.Router();

router
    .get('/', (req,res, next) => {
        model.getProducts().then(list => {
            const data = {
                data: list, 
                total: list.length,
                isSuccess: true
            };
            res.send(data)
        }).catch(next)
    })

    .get('/search/:q', (req, res) => {
        const term = req.params.q;
        console.log(term)
        const list = model.searchProduct(term);
        const data = {
            data: list,
            total: list.length,
            isSuccess: true
        }
        res.send(data)
    })

    .get('/:id', (req,res) => {
        const id = +req.params.id
        const product = model.getProductById(id);
        const data = { data:product, total: 1, isSuccess: true}
        res.send(data)
    })

    .post('/', (req,res) => {
        const product = req.body;

        console.log(req.query)
        console.log(req.headers)
        console.log(req.body)

        model.addProduct(product);
        const data = { data:product, total: 1, isSuccess: true}
        res.send(data)
    })

    .patch('/:id', (req,res) => {
        const product = req.body;
        model.updateProduct(product);
        const data = {
            data:product,
            total: 1,
            isSuccess: true
        }
        res.send(data)
    })

    .delete('/:id', (req,res) => {
        const id = +req.params.id
        model.deleteProduct(id);
        const data = { data:id, total: 1, isSuccess: true}
        res.send(data)
    })

module.exports = router;

/* ways to pass information to the server
* 1. query string
* 2. body
* 3. url parameters
* 4. headers
* 5. cookies
*/