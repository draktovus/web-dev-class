const express = require('express');
const model = require('../models/users')
const router = express.Router();

router
    .get('/', (req, res, next) => {
        model.getAll(+req.query.page, +req.query.pageSize).then(list => {
            const data = {
                data: list.items,
                total: list.total,
                isSuccess: true
            };
            res.send(data)
        }).catch(next)
    })

    .get('/search/:q', (req, res, next) => {
        model.search(req.params.q, req.query.page, req.query.pageSize)
        .then(result=>{
            const data = {
                data: result.items,
                total: result.total,
                isSuccess: true
            };
            res.send(data)
        }).catch(err=>next(err));
    })

    .get('/:id', (req, res, next) => {
        model.getById(+req.params.id).then(result=>{
            const data = {
                data: result,
                isSuccess: true
            };
            res.send(data)
        }).catch(next)
    })

    .post('/', (req, res, next) => {
        model.add(req.body).then(result=>{
            const data = {
                data: result,
                isSuccess: true
            };
            res.send(data)
        }).catch(next)
    })

    .patch('/:id', (req, res, next) => {
        model.update(req.body).then(result=>{
            const data = {
                data: result,
                isSuccess: true
            };
            res.send(data)
        }).catch(next)
    })

    .delete('/:id', (req, res, next) => {
        model.delete(req.params.id).then(result=>{
            const data = {
                data: result,
                isSuccess: true
            };
            res.send(data)
        }).catch(next)
    })

    .post('/seed', (req, res, next) => {
        model.seed(req.body).then(result=>{
            const data = {
                data: result,
                isSuccess: true
            };
            res.send(data)
        }).catch(next);
    })

module.exports = router;

/* ways to pass information to the server
* 1. query string
* 2. body
* 3. url parameters
* 4. headers
* 5. cookies
*/