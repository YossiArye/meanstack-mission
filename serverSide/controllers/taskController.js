const express = require('express');
var router = express.Router();
var ObjectID = require('mongoose').Types.ObjectId;
var mongoose = require('mongoose') 
var { Task } = require('../models/task');

router.get('/', (req, res) => {
    Task.find({})
        .exec()
        .then((task) => {
            res.json(task);
            console.log('get tasks succeeded')
        })
        .catch((err) => console.log(`Error get tasks:${JSON.stringify(err, undefined, 2)}`));
});

router.get('/:id', (req, res) => {
    if(!ObjectID(req.params.id)){
        return res.status(400).send(`Error id: ${req.params.id}`);
    }
    Task.findById(req.params.id)
        .exec()
        .then((task) => {
            res.json(task);
            console.log('get task succeeded')
        })
        .catch((err) => console.log(`Error get task:${JSON.stringify(err, undefined, 2)}`));
});


router.post('/', (req, res) => {
    var newTask = new Task({
        description: req.body.description,
        date: req.body.date,
        personID: req.body.personID
    });
    newTask.save()
        .then((task) => {
            res.json(task);
            console.log('post task succeeded')
        })
        .catch((err) => console.log(`Error post task: ${JSON.stringify(err, undefined, 2)}`));
});


router.put('/:id', (req, res) => {
    if(!ObjectID(req.params.id)){
        return res.status(400).send(`Error id: ${req.params.id}`);
    }
    var newTask = {
        description: req.body.description,
        date: req.body.date,
        personID: req.body.personID
    };
    Task.findOneAndUpdate({'_id':req.params.id}  , {$set : newTask},{new:true})
        .then((task) => {
            res.json(task);
            console.log('Update task succeeded')
        })
        .catch((err) => console.log(`Error update task: ${JSON.stringify(err, undefined, 2)}`));
});


router.delete('/:id', (req, res) => {
    if(!ObjectID(req.params.id)){
        return res.status(400).send(`Error id: ${req.params.id}`);
    }

    Task.findOneAndRemove({'_id':req.params.id})
        .then((task) => {
            res.json(task);
            console.log('Delete task succeeded')
        })
        .catch((err) => console.log(`Error delete task: ${JSON.stringify(err, undefined, 2)}`));
});

module.exports = router;