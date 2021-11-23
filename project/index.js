//Student_details - entering
//  PD,CD,SD
//Fetching Students with their marks
//Dept name - top 5 selected

var express = require('express');
var students = require('./routes/students');

var app = express();

var st="<!DOCTYPE html><HTML><HEAD></HEAD><BODY>";
var et="</BODY></HTML>";

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ limit: "500mb", extended: true }));

// parse application/json
app.use(express.json({ limit: "500mb", extended: true }));
//http://localhost:5000/students
app.use('/students',students);

//http://localhost:5000/
app.get("/",(req,res) => {
    res.send(st+"<H1>"+"Welcome to Student Data Management portal"+"</H1>"+et);
});

app.listen(5000);