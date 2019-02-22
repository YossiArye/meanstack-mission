const express = require('express');
var router = express.Router();
var mongoose = require('mongoose')

var { Task } = require('../models/task');


router.get('/', (req, res) => {
        Task.aggregate([
            {
                $lookup:
                {
                  from: "people",
                  localField: "personID",
                  foreignField: "_id",
                  as: "tasks_person"
                }
            }
         ]).exec()
         .then((taskPerson) => {
            res.json(taskPerson);
            console.log('get taskPerson succeeded')
        })
        .catch((err) => console.log(`Error get taskPerson:${JSON.stringify(err, undefined, 2)}`));
});

 
module.exports = router;