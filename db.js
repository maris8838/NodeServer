const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/crudDB', { 
    keepAlive: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
 },(err)=>{
    if(!err)
    console.log("sucess");
    else
    console.log("failed");
});
module.exports = mongoose;