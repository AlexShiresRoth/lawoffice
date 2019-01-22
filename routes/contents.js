const express = require('express');
const router = express.Router();
const Content = require('../models/content')

router.get('/', (req,res,next) => {
    Content.find()
    .then((contents) => {
        console.log(contents)
        res.json(contents)
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

router.get('/:contentId',(req,res) => {
    Content.findById(req.params.contentId)
        .then((foundContent) => {
            res.json(foundContent);
        })
        .catch(err => {
            res.send(err);
        });
});

router.put('/:contentId', (req,res) => {
    Content.findByIdAndUpdate({_id: req.params.contentId}, req.body, {new:true})
        .then(content => {
            res.json(content);
        })
        .catch(err => {
            res.send(err);
        });
});

router.delete('/:contentId', (req, res) => {
    Content.remove({_id: req.params.contentId})
        .then(() => {
            res.json({msg: 'Content has been removed from database'});
        })
        .catch(err => {
            res.send(err);
        });
});
module.exports = router;