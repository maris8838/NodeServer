const express = require('express');
const bodyParser = require('body-parser');

const{ mongoose } = require ('./db.js');
var employeeController = require('./controllers/employeeController.js');


var app = express();
app.use(bodyParser.json());

app.use(function(req,res,next){
    res.header('Access-Control-Allow-Origin', "*");
     res.header('Access-Control-Allow-Headers', "Origin,X-Requested-With,Content-Type,Accept");
     next();
});
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
    });

app.listen(3000,()=>console.log('server starts at port : 3000'));

app.use('/employees',employeeController);

