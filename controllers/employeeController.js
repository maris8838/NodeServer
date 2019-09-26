const express = require('express');
var router = express.Router();
var objectId = require('mongoose').Types.objectId;

var { Employee } = require('../models/employee');

router.get('/',(req,res)=>{
    Employee.find((err,docs)=>{
        if (!err) {res.send(docs);}
        else{console.log("error in retriving employee: "+ JSON.stringify(err,undefined,2));}

    });
});

router.get('/:id',(req,res)=>{
    //  if(!objectId.isValid(req.params.id))
    //    return res.status(400).send(`No record with given id : ${req.params.id}`)
    Employee.findById(req.params.id, (err,doc)=>{
        if(!err) { res.send(doc); }
        else{ console.log('error in retriving employee');}
    });
});


router.post('/',(req,res) => {
    var employee = new Employee({
        name : req.body.name,
        age : req.body.age,
        city : req.body.city,
        state : req.body.state,
        employeeId : req.body.employeeId,
        office : req.body.office,
    });
    employee.save((err,doc)=>{
        if(!err){ res.send(doc);}
        else{ console.log(err);}
    });
});

router.put('/:id', (req,res) => {
    //if (!objectId.isValid(req.params.id))return res.status(400).send(`No record with give id : ${req.params.id}`);
    var emp = {
        name: req.body.name,
        age: req.body.age,
        city: req.body.city,
        state: req.body.state,
        employeeId: req.body.employeeId,
        office: req.body.office,
    };
    Employee.findByIdAndUpdate(req.params.id, {$set : emp}, {new : true}, (err,doc) => {
        if(!err){ res.send(doc);}
        else{ console.log("error in employee save");}
    });
});

router.delete('/:id', (req,res)=>{
    // if(!objectId.isValid(req.params.id))
    //   return res.status(400).send(`No record with given id : ${req.params.id}`);

    Employee.findByIdAndRemove(req.params.id, (err,doc)=>{
        if(!err){ res.send(doc);}
        else{ console.log("error in employee save");}
    });
});

module.exports = router;