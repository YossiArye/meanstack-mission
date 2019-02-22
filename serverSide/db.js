
const mongoose = require('mongoose');


mongoose.Promise=global.Promise;
mongoose.connect('mongodb://localhost:27017/homeTasks' ,{ useNewUrlParser: true })
.then(()=>console.log("mongodb connection succeeded"))
.catch((err)=>console.log(`error in db connection ${JSON.stringify(err,undefined,2)}`));    

module.exports=mongoose;

