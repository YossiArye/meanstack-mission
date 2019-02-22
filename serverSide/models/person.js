const mongoose = require('mongoose');

var Person =mongoose.model('Person',{ 
    "name" : {type:String}, 
    "nickname" : {type:String}, 
    "description" : {type:String} 
});

module.exports= {Person};

