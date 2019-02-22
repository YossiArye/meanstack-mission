const express = require('express');
var router = express.Router();
var ObjectID = require('mongoose').Types.ObjectId;

var { Person } = require('../models/person');

router.get('/', (req, res) => {
    Person.find({})
        .exec()
        .then((person) => {
            res.json(person);
            console.log('get people succeeded')
        })
        .catch((err) => console.log(`Error get people:${JSON.stringify(err, undefined, 2)}`));
});

router.get('/:id', (req, res) => {
    if(!ObjectID(req.params.id)){
        return res.status(400).send(`Error id: ${req.params.id}`);
    }
    Person.findById(req.params.id)
        .exec()
        .then((person) => {
            res.json(person);
            console.log('get person succeeded')
        })
        .catch((err) => console.log(`Error get person:${JSON.stringify(err, undefined, 2)}`));
});


router.post('/', (req, res) => {
    var newPerson = new Person({
        name: req.body.name,
        nickname: req.body.nickname,
        description: req.body.description
    });
    newPerson.save()
        .then((person) => {
            res.json(person);
            console.log('post person succeeded')
        })
        .catch((err) => console.log(`Error post person: ${JSON.stringify(err, undefined, 2)}`));
});


router.put('/:id', (req, res) => {
    if(!ObjectID(req.params.id)){
        return res.status(400).send(`Error id: ${req.params.id}`);
    }
    var newPerson = {
        name: req.body.name,
        nickname: req.body.nickname,
        description: req.body.description
    };
    Person.findOneAndUpdate({'_id':req.params.id}  , {$set : newPerson},{new:true})
        .then((person) => {
            res.json(person);
            console.log('Update person succeeded')
        })
        .catch((err) => console.log(`Error update person: ${JSON.stringify(err, undefined, 2)}`));
});


router.delete('/:id', (req, res) => {
    if(!ObjectID(req.params.id)){
        return res.status(400).send(`Error id: ${req.params.id}`);
    }

    Person.findOneAndRemove({'_id':req.params.id})
        .then((person) => {
            res.json(person);
            console.log('Delete person succeeded')
        })
        .catch((err) => console.log(`Error delete person: ${JSON.stringify(err, undefined, 2)}`));
});

module.exports = router;