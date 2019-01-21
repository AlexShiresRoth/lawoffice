const express = require('express');
const router = express.Router();
const Content = require('../models/content')

router.get('/', (req,res,next) => {
    Content.find()
    .then((content) => {
        res.json(content)
    })
    .catch((err) => {
        res.send(err)
    });
});

router.post('/',(req, res) => {
    Content.create(req.body)
    .then((newContent) => {
        res.status(201).json(newContent)
    })
    .catch((err) => {
        res.send(err)
    });
});

module.exports = router;