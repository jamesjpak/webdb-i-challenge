const express = require('express');
const router = express.Router();

const db = require('./accounts-model');

router.get("/", (req, res) => {
    db.find(req.query)
    .then( accounts => {
        if (accounts) {
            res.status(200).json(accounts)
        } 
    })
    .catch( err => {
        res.status(500).json({ message: 'Error while retrieving accounts'})
    })
})

router.post("/", (req, res) => {
    
})


module.exports = router;