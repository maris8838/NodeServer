const mongoose = require('mongoose');
var Employee = mongoose.model('Employee',{
    name : {type : String},
    age : {type : Number},
    city : {type : String},
    state : {type : String},
    employeeId : {type : Number},
    office : {type : String}
});

module.exports = {Employee};