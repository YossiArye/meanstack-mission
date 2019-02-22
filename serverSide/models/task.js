

const mongoose = require('mongoose');
var ObjectID = require('mongoose').Types.ObjectId;
var Task =mongoose.model('Task',{ 
    "description" : {type:String}, 
    "date" : {type: Date}, 
    "personID" : {type:ObjectID}
});

module.exports= {Task};

