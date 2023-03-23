const { response } = require('express');
const express = require('express');
const router =  express.Router();

// Actions
router.get('/',  (req, res, next) => {
    const joke = fetch('https://v2.jokeapi.dev/joke/Any')
    .then(response => response.json())
    .then(x => {
        if (x.safe == false) {
            throw new Error("Not safe for work")
        }
        res.send(x.joke)
    })
    .catch(err=>{
        next(err)
    })
})

module.exports = router;