var express = require('express');
const connection = require('../db_config');
var student = express.Router();

student.post('/', function(req, res) {
    // console.log("Success");
    // console.log(req.body);
    var query = "Insert into PD(Name,RegNo,RollNo,Degree,Branch,DOB,Age,Gender,TAdd,PAdd,MN,MailID,H/D) values('"+ 
        req.body.name + "','"+ req.body.regno + "','"+ req.body.rollno + "','"+ req.body.degree + "','"
        + req.body.branch + "','"+ req.body.dob + "',"+ req.body.age + ",'"+ req.body.gender + "','"+ req.body.tadd + 
        "','"+ req.body.padd + ",'"+ req.body.mn + ",'"+ req.body.mailid + "','"+ req.body.hd + "');";
        /*
    {
        "name":"",
        "regno":"",
        "rollno":"",
        "degree":"",
        "branch":"",
        "dob":"",
        "age":"",
        "gender":"",
        "tadd":"",
        "padd":"",
        "mn":"",
        "mailid":"",
        "hd":""
    }
    */
    connection.query(query, (err, result)=>{
        if(err){
            console.log(err);
            res.send("Details Not Stored!");
        }
        else{
            console.log(result);
            res.send("Deatils Stored Successfully!");
            // res.send(starttag+ "Sign Up Successful<br><A href='http://localhost:8084/'>Go to Start Page</A>" +endtag);
            // res.send(result);
        }
    });
    // res.send('SignUp Router Works!');
  });