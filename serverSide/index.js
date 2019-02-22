const express = require('express');
const bodyParser = require('body-parser');
const {mongoose}=require('./db.js');
const cors = require('cors');

var personController = require('./controllers/personController')
var taskController = require('./controllers/taskController')
var taskPersonController = require('./controllers/taskPersonController')

var app=express();
app.use(bodyParser.json());
app.use(cors({origin : 'http://localhost:4200'}));

app.listen(3030, ()=>console.log('Server started at port: 3030'));

app.use('/people',personController);
app.use('/taskPerson',taskPersonController);
app.use('/tasks',taskController);

