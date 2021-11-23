/*
diff mas and trans table
is_active
query format
arrow function
async and await
views - getsid
promises
transaction locking
*/
var express = require('express');
const connection = require('../db_config');
var student_router = express.Router();
const mysql = require('mysql');

var st="<!DOCTYPE html><HTML><HEAD></HEAD><BODY>";
var et="</BODY></HTML>";

//http://localhost:5000/students
// student_router.get("/",(req,res)=>{
//     res.send(
//         st+"<H1>"+"Students Router Works!<br>Welcome to the portal!"+"</H1>"+
//         "<A href='http://localhost:5000/students/degPD'><INPUT type='button' value='Insert Personal Details'/></A>"+
//         "<A href='http://localhost:5000/students/degCD'><INPUT type='button' value='Insert Course Details'/></A>"+
//         "<A href='http://localhost:5000/students/degSD'><INPUT type='button' value='Insert Sem Details'/></A>"
//         +et
//     );
// });

//http://localhost:5000/students/degPD
student_router.get("/degPD",(req,res)=>{
    res.send(
        st+"Enter Personal Details below"+
        "<br><FORM action='http://localhost:5000/students/addPD' method='POST'>"+
        "Name: <INPUT type='text' hint='ABC XYZ' name='name'/><br>"+
        "Reg No: <INPUT type='text' hint='111111' name='regno'/><br>"+
        "Roll No: <INPUT type='text' hint='19IT1150' name='rollno'/><br>"+
        "Degree: <INPUT type='text' hint='B. Tech' name='degree'/><br>"+
        "Branch: <INPUT type='text' hint='IT' name='branch'/><br>"+
        "DOB: <INPUT type='text' hint='2002-07-02' name='dob'/><br>"+
        "Gender: <INPUT type='text' hint='Male' name='gender'/><br>"+
        "Temp Add: <INPUT type='text' hint='Chennai' name='tadd'/><br>"+
        "Perm Add: <INPUT type='text' hint='Chennai' name='padd'/><br>"+
        "Mobile Number: <INPUT type='text' hint='9876543210' name='mn'/><br>"+
        "Mail ID: <INPUT type='text' hint='abc.xyz@gmail.com' name='mailid'/><br>"+
        "H/D: <INPUT type='text' hint='D' name='hd'/><br>"+
        "<INPUT type='SUBMIT' value='SUBMIT'/>"
        +"</FORM>"+et
    );
});

//http://localhost:5000/students/degCD
student_router.get("/degCD",(req,res)=>{
    res.send(
        st+"Enter Course Details below"+
        "<br><FORM action='http://localhost:5000/students/addCD' method='POST'>"+
        "SID: <INPUT type='text' hint='1' name='sid'/><br>"+
        "Reg No: <INPUT type='text' hint='111111' name='regno'/><br>"+
        "Course Name: <INPUT type='text' hint='B. Tech' name='cn'/><br>"+
        "Board: <INPUT type='text' hint='Anna University' name='board'/><br>"+
        "Year Of Appearing: <INPUT type='text' hint='2019' name='yoa'/><br>"+
        "Year Of Passing: <INPUT type='text' hint='2023' name='yop'/><br>"+
        "Specifications: <INPUT type='text' hint='IT' name='spec'/><br>"+
        "Mark: <INPUT type='text' hint='9.42 CGPA' name='mark'/><br>"+
        "<INPUT type='SUBMIT' value='SUBMIT'/>"
        +"</FORM>"+et
    );
});

//http://localhost:5000/students/degSD
student_router.get("/degSD",(req,res)=>{
    res.send(
        st+"Enter Sem Details below"+
        "<br><FORM action='http://localhost:5000/students/addCD' method='POST'>"+
        "SID: <INPUT type='text' hint='1' name='sid'/><br>"+
        "Reg No: <INPUT type='text' hint='111111' name='regno'/><br>"+
        "Sem: <INPUT type='text' hint='3' name='cn'/><br>"+
        "No. of Subjects: <INPUT type='text' hint='9' name='board'/><br>"+
        "No. of Subjects Cleared: <INPUT type='text' hint='9' name='yoa'/><br>"+
        "GPA: <INPUT type='text' hint='2023' name='9.50'/><br>"+
        "CGPA: <INPUT type='text' hint='IT' name='9.42'/><br>"+
        "<INPUT type='SUBMIT' value='SUBMIT'/>"
        +"</FORM>"+et
    );
});

//http://localhost:5000/students/addPD
student_router.post('/addPD', (req, res) => {
    // console.log("Success");
    // console.log(req.body);
    // Trigger for Age
    var query = "Insert into m_pd(name,reg_no,roll_no,degree,branch,dob,gender,tadd,padd,mn,mail_id,hd) values(?,?,?,?,?,?,?,?,?,?,?,?)";
    query = mysql.format(query,[
        req.body.name,
        req.body.regno,
        req.body.rollno,
        req.body.degree,
        req.body.branch,
        req.body.dob,
        req.body.gender,
        req.body.tadd,
        req.body.padd,
        req.body.mn,
        req.body.mailid,
        req.body.hd,
    ]);
        // '"+ 
        // req.body.name + "','"+ req.body.regno + "','"+ req.body.rollno + "','"+ req.body.degree + "','"
        // + req.body.branch + "','"+ req.body.dob + "','"+ req.body.gender + "','"+ req.body.tadd + 
        // "','"+ req.body.padd + "',"+ req.body.mn + ",'"+ req.body.mailid + "','"+ req.body.hd + "');";
        /*
    {
        "name":"",
        "regno":"",
        "rollno":"",
        "degree":"",
        "branch":"",
        "dob":"",
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
            res.send("Student's Personal Details Not Stored!");
        }
        else{
            // console.log(result);
            res.send("Student's Personal Details Stored Successfully!");
        }
    });
  });

//http://localhost:5000/students/addCD
student_router.post('/addCD', (req, res) => {
    // console.log("Success");
    // console.log(req.body);
    var query = "Insert into t_cd(sid,reg_no,cn,board,yoa,yop,spec,mark) values(?,?,?,?,?,?,?,?);";
    query = mysql.format(query,[
        req.body.sid,
        req.body.regno,
        req.body.cn,
        req.body.board,
        req.body.yoa,
        req.body.yop,
        req.body.spec,
        req.body.mark
    ]);
    // var query = "Insert into CD(SID,RegNo,CN,BOARD,YOA,YOP,Spec,Mark) values("+ 
    //     req.body.sid + ",'"+ req.body.regno + "','"+ req.body.cn + "','"+ req.body.board + "',"
    //     + req.body.yoa + ","+ req.body.yop + ",'"+ req.body.spec + "','"+ req.body.mark + "');";
        /*
    {
        "sid":"",
        "regno":"",
        "cn":"",
        "board":"",
        "yoa":"",
        "yop":"",
        "spec":"",
        "mark":""
    }
    */
    connection.query(query, (err, result)=>{
        if(err){
            console.log(err);
            res.send("Student's Course Detail Not Stored!");
        }
        else{
            // console.log(result);
            res.send("Student's Course Detail Stored Successfully!");
        }
    });
  });

//http://localhost:5000/students/addSD
student_router.post('/addSD', (req, res) => {
    // console.log("Success");
    // console.log(req.body);
    var query = "Insert into t_sd(sid,reg_no,sem,nos,nosc,gpa,cgpa) values(?,?,?,?,?,?,?)";
        // "+ 
        // req.body.sid + ",'"+ req.body.regno + "',"+ req.body.sem + ","+ req.body.nos + ","+ req.body.nosc + ","
        // + req.body.gpa + ","+ req.body.cgpa + ");";
        query = mysql.format(query,[
            req.body.sid,
            req.body.regno,
            req.body.sem,
            req.body.nos,
            req.body.nosc,
            req.body.gpa,
            req.body.cgpa
        ]);
        /*
    {
        "sid":"",
        "regno":"",
        "sem":"",
        "nos":"",
        "nosc":"",
        "gpa":"",
        "cgpa":""
    }
    */
    connection.query(query, (err, result)=>{
        if(err){
            console.log(err);
            res.send("Student's Semester Detail Not Stored!");
        }
        else{
            // console.log(result);
            res.send("Student's Semester Detail Stored Successfully!");
        }
    });
  });

//http://localhost:5000/students/updatePD
student_router.post('/updatePD', (req, res) => {
    // console.log("Success");
    // console.log(req.body);
    var queryc = "SELECT is_read from m_pd where reg_no = ?";
    queryc = mysql.format(queryc,[
        req.body.regno
    ]);
    connection.query(queryc, (errc, resultc)=>{
        if(errc){
            console.log(errc);
            res.send("Student's Personal Detail Not Updated!");
        }
        else{
            // console.log(result);
            // res.send("Student's Personal Detail Updated Successfully!");
            resultc.forEach(elementc => {
                if(elementc.is_read=="0"){
                    var queryr = "UPDATE m_pd SET is_read = ? where reg_no = ?;"
                    queryr = mysql.format(queryr,[
                        1,
                        req.body.regno
                    ]);
                    connection.query(queryr, (err, result)=>{
                        if(err){
                            console.log(err);
                            res.send("Student's Personal Detail Not Updated!");
                        }
                        else{
                            var query = "UPDATE m_pd SET name=?,roll_no=?,degree=?,branch=?,dob=?,age=?,gender=?"+
                            ",tadd=?,padd=?,mn=?,mail_id=?,hd=? WHERE reg_no = ?;"
                            query = mysql.format(query,[
                                req.body.name,
                                req.body.rollno,
                                req.body.degree,
                                req.body.branch,
                                req.body.dob,
                                req.body.age,
                                req.body.gender,
                                req.body.tadd,
                                req.body.padd,
                                req.body.mn,
                                req.body.mailid,
                                req.body.hd,
                                req.body.regno
                            ]);
                                /*
                            {
                                "regno":"",
                                "name":"",
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
                                    res.send("Student's Personal Detail Not Updated!");
                                }
                                else{
                                    // console.log(result);
                                    var queryr = "UPDATE m_pd SET is_read = 0 where reg_no = ?;"
                                    queryr = mysql.format(queryr,[
                                        req.body.regno
                                    ]);
                                    connection.query(queryr, (err, result) => {
                                        if(err){
                                            console.log(err);
                                            res.send("Student's Personal Detail Not Updated!");
                                        }
                                        else{
                                            res.send("Student's Personal Detail Updated Successfully!");
                                        }                                        
                                    });
                                }
                            });
                        }
                    });
                }
                else{
                    res.send("Record in Use. Transaction Locked!");
                }
            });
        }
    });
  });

//http://localhost:5000/students/updateCD
student_router.post('/updateCD', (req, res) => {
    // console.log("Success");
    // console.log(req.body);
    var queryc = "SELECT is_read from t_cd where reg_no = ? and rid = ?";
    queryc = mysql.format(queryc,[
        req.body.regno,
        req.body.rid
    ]);
    connection.query(queryc, (errc, resultc)=>{
        if(errc){
            console.log(errc);
            res.send("Student's Course Detail Not Updated!");
        }
        else{
            // console.log(result);
            // res.send("Student's Personal Detail Updated Successfully!");
            resultc.forEach(elementc => {
                if(elementc.is_read=="0"){
                    var queryr = "UPDATE t_cd SET is_read = ? where reg_no = ? and rid = ?;"
                    queryr = mysql.format(queryr,[
                        1,
                        req.body.regno,
                        req.body.rid
                    ]);
                    connection.query(queryr, (err, result)=>{
                        if(err){
                            console.log(err);
                            res.send("Student's Course Detail Not Updated!");
                        }
                        else{
                            var query = "UPDATE t_cd SET cn=?,board=?,yoa=?,yop=?,spec=?,mark=? WHERE reg_no=? AND rid=?;"
                            query = mysql.format(query,[
                                req.body.cn,
                                req.body.board,
                                req.body.yoa,
                                req.body.yop,
                                req.body.spec,
                                req.body.mark,
                                req.body.regno,
                                req.body.rid
                            ]);
                                /*
                            {
                                "regno":"",
                                "rid":"",
                                "cn":"",
                                "board":"",
                                "yoa":"",
                                "yop":"",
                                "spec":"",
                                "mark":""
                            }
                            */
                            connection.query(query, (err, result)=>{
                                if(err){
                                    console.log(err);
                                    res.send("Student's Course Detail Not Updated!");
                                }
                                else{
                                    // console.log(result);
                                    var queryr = "UPDATE t_cd SET is_read = 0 where reg_no = ? and rid = ?;"
                                    queryr = mysql.format(queryr,[
                                        req.body.regno,
                                        req.body.rid
                                    ]);
                                    connection.query(queryr, (err, result) => {
                                        if(err){
                                            console.log(err);
                                            res.send("Student's Course Detail Not Updated!");
                                        }
                                        else{
                                            res.send("Student's Course Detail Updated Successfully!");
                                        }                                        
                                    });
                                }
                            });
                        }
                    });
                }
                else{
                    res.send("Record in Use. Transaction Locked!");
                }
            });
        }
    });
  });

//http://localhost:5000/students/getPD
student_router.get('/getPD', (req, res) => {
    // console.log("Success");
    // console.log(req.body);
    var queryc = "SELECT is_read from m_pd where reg_no = ?";
    queryc = mysql.format(queryc,[
        req.body.regno
    ]);
    connection.query(queryc, (errc, resultc)=>{
        if(errc){
            console.log(errc);
            res.send("Student's Personal Detail Not Fetched!");
        }
        else{
            // console.log(result);
            // res.send("Student's Personal Detail Updated Successfully!");
            resultc.forEach(elementc => {
                if(elementc.is_read=="0"){
                    var query = "Select * from m_pd where reg_no=?;";
                    query = mysql.format(query,[
                        req.body.regno
                    ]);
                    /*
                        {
                            "regno":""
                        }
                    */
                    connection.query(query, (err, result)=>{
                        if(err){
                            console.log(err);
                            res.send("Couldn't find data!");
                        }
                        else{
                            // console.log(result);
                            res.send(result);
                        }
                    });
                }
                else{
                    res.send("Record in Use. Transaction Locked!");
                }
            });
        }
    });
});

//http://localhost:5000/students/getCD
student_router.get('/getCD', (req, res) => {
    // console.log("Success");
    // console.log(req.body);
    var queryc = "SELECT is_read from m_pd where reg_no = ?";
    queryc = mysql.format(queryc,[
        req.body.regno
    ]);
    connection.query(queryc, (errc, resultc)=>{
        if(errc){
            console.log(errc);
            res.send("Cannot fetch Course Details of the given Student!");
        }
        else{
            // console.log(result);
            // res.send("Student's Personal Detail Updated Successfully!");
            let check=1;
            resultc.forEach(elementc => {
                if(elementc.is_read=="0" && check==1){
                    var queryc1 = "SELECT is_read from t_cd where reg_no = ?";
                    queryc1 = mysql.format(queryc1,[
                        req.body.regno
                    ]);
                    connection.query(queryc1, (errc1, resultc1)=>{
                        if(errc1){
                            console.log(errc1);
                            res.send("Cannot fetch Course Details of the given Student!");
                        }
                        else{
                            // console.log(result);
                            // res.send("Student's Personal Detail Updated Successfully!");
                            let check1=1;
//Check for multiple res.send()
                            resultc1.forEach(elementc1 => {
                                if(elementc1.is_read=="0" && check1==1){
                                    var query = "Select * from getsid where reg_no=?;";
                                    query = mysql.format(query,[
                                        req.body.regno
                                    ]);
                                    /*
                                        {
                                            "regno":""
                                        }
                                    */
                                    connection.query(query, async (err, result)=>{
                                        if(err){
                                            console.log(err);
                                            res.send("Couldn't find data!");
                                        }
                                        else{
                                            // console.log(result);
                                            var sid=0;
                                            function getsid(){
                                                result.forEach(element => {
                                                    sid = element.sid;
                                                });
                                                if(sid!=0){
                                                    return Promise.resolve(sid);
                                                    // return sid;
                                                } else{
                                                    return Promise.reject("Cannot Find SID!");
                                                    // return "Null";
                                                }
                                            }
                                            await getsid();
                                            // console.log(sid);
                                            var query1 = "SELECT t_cd.reg_no, Name, count(*) as Total_Courses FROM t_cd LEFT JOIN m_pd ON m_pd.sid=t_cd.sid WHERE t_cd.sid=? GROUP BY t_cd.sid;";
                                            query1=mysql.format(query1,[
                                                sid
                                            ]);
                                            connection.query(query1, (err, result1)=>{
                                                if(err){
                                                    console.log(err);
                                                    res.send("Cannot fetch Course Details of the given Student!");
                                                }
                                                else{
                                                    // console.log(result);
                                                    check=0;
                                                    check1=0;
                                                    res.send(result1);
                                                }
                                            });
                                            // res.send(result);
                                        }
                                    });
                                }                   
                                else{
                                    res.send("Record in Use. Transaction Locked!");
                                }
                            });
                        }
                    });
                }                   
                else{
                    res.send("Record in Use. Transaction Locked!");
                }
            });
        }
    });
});  

//http://localhost:5000/students/getSD
student_router.get('/getSD', (req, res) => {
    // console.log("Success");
    // console.log(req.body);
    var query = "Select * from getsid where reg_no=?;";
    query = mysql.format(query,[
        req.body.regno
    ]);
    /*
        {
            "regno":""
        }
    */
    connection.query(query, async (err, result)=>{
        if(err){
            console.log(err);
            res.send("Couldn't find data!");
        }
        else{
            // console.log(result);
            var sid;
            await result.forEach(element => {
                sid = element.SID;
            });
            var query1 = "SELECT t_sd.RegNo, Name, count(*) as Total_Sem FROM t_sd LEFT JOIN m_pd ON m_pd.sid=t_sd.sid WHERE t_sd.sid=? GROUP BY t_sd.sid;";
            query1=mysql.format(query1,[
                sid
            ]);
            connection.query(query1, (err, result1)=>{
                if(err){
                    console.log(err);
                    res.send("Cannot fetch Sem Details of the given Student!");
                }
                else{
                    // console.log(result);
                    res.send(result1);
                }
            });
            // res.send(result);
        }
    });
  });

  //http://localhost:5000/students/delete
  student_router.post('/delete', (req, res) => {
      // console.log("Success");
      // console.log(req.body);
      var check=0;
      /*
          {
              "regno":""
          }
      */
      var query = "UPDATE m_pd SET is_active=0 where reg_no = ?;"
      query = mysql.format(query,[
        req.body.regno
        ]);
        connection.query(query, (err, result)=>{
            if(err){
                console.log(err);
                // res.send("Student Data Not Removed!");
            }
            else{
                // console.log(result);
                check++;
                // res.send("Student Data Removed!");
            }
        });
      var query = "UPDATE t_cd SET is_active=0 where reg_no = ?;"
      query = mysql.format(query,[
        req.body.regno
        ]);
        connection.query(query, (err, result)=>{
            if(err){
                console.log(err);
                // res.send("Student Data Not Removed!");
            }
            else{
                // console.log(result);
                check++;
                // res.send("Student Data Removed!");
            }
        });
      var query = "UPDATE t_sd SET is_active=0 where reg_no = ?;"
      query = mysql.format(query,[
        req.body.regno
        ]);
        connection.query(query, (err, result)=>{
            if(err){
                console.log(err);
                // res.send("Student Data Not Removed!");
            }
            else{
                // console.log(result);
                check++;
                // res.send("Student Data Removed!");
            }
        });
    if(check==3)
        res.send("Student Data Removed!");
    else
        res.send("Student Data Not Removed!");
    //   var query1 = "DELETE FROM m_pd where reg_no = ?;";
    //   query1 = mysql.format(query1,[
    //     req.body.regno
    //     ]);
    //   /*
    //       {
    //           "regno":""
    //       }
    //   */
    //           connection.query(query1, (err, result)=>{
    //               if(err){
    //                   console.log(err);
    //                   res.send("Student Data Not Removed!");
    //               }
    //               else{
    //                   // console.log(result);
    //                   res.send("Student Data Removed!");
    //               }
    //           });
      });

//http://localhost:5000/students/getPDwithCD
student_router.get('/getPDwithCD', (req, res) => {
    // console.log("Success");
    // console.log(req.body);
    var query = "Select * from m_pd where reg_no =?;";
    query = mysql.format(query,[
        req.body.regno
    ]);
    /*
        {
            "regno":""
        }
    */
    connection.query(query, (err, result)=>{
        if(err){
            console.log(err);
            res.send("Couldn't find data!");
        }
        else{
            // console.log(result);
            var sid;
            result.forEach(element => {
                sid = element.SID;
            });
            var query1 = "SELECT * FROM m_pd INNER JOIN t_cd ON m_pd.sid=t_cd.sid WHERE m_pd.sid=?;";
            query1=mysql.format(query1,[
                sid
            ]);
            connection.query(query1, (err, result)=>{
                if(err){
                    console.log(err);
                    res.send("Cannot fetch Data!");
                }
                else{
                    // console.log(result);
                    res.send(result);
                }
            });
        }
    });
  });

//http://localhost:5000/students/getPDwithSD
student_router.get('/getPDwithSD', (req, res) => {
    // console.log("Success");
    // console.log(req.body);
    var query = "Select * from m_PD where reg_no = ?;";
    query = mysql.format(query,[
        req.body.regno
    ]);
    /*
        {
            "regno":""
        }
    */
    connection.query(query, (err, result)=>{
        if(err){
            console.log(err);
            res.send("Couldn't find data!");
        }
        else{
            // console.log(result);
            var sid;
            result.forEach(element => {
                sid = element.SID;
            });
            var query1 = "SELECT * FROM m_pd LEFT JOIN t_sd ON m_pd.sid=t_sd.sid WHERE m_pd.sid=?;";
            query1=mysql.format(query1,[
                sid
            ]);
            connection.query(query1, (err, result)=>{
                if(err){
                    console.log(err);
                    res.send("Cannot fetch Data!");
                }
                else{
                    // console.log(result);
                    res.send(result);
                }
            });
        }
    });
  });

//http://localhost:5000/students/getPDwithSD
student_router.get('/getPDwithSD', (req, res) => {
    // console.log("Success");
    // console.log(req.body);
    var query = "Select * from m_pd where reg_no = ?;";
    query = mysql.format(query,[
        req.body.regno
    ]);
    /*
        {
            "regno":""
        }
    */
    connection.query(query, (err, result)=>{
        if(err){
            console.log(err);
            res.send("Couldn't find data!");
        }
        else{
            // console.log(result);
            var sid;
            result.forEach(element => {
                sid = element.SID;
            });
            var query1 = "SELECT * FROM m_pd LEFT JOIN t_sd ON m_pd.sid=t_sd.sid WHERE m_pd.sid=?;";
            query1=mysql.format(query1,[
                sid
            ]);
            connection.query(query1, (err, result)=>{
                if(err){
                    console.log(err);
                    res.send("Cannot fetch Data!");
                }
                else{
                    // console.log(result);
                    res.send(result);
                }
            });
        }
    });
  });

//http://localhost:5000/students/getBestSD
student_router.get('/getBestSD', (req, res) => {
    // console.log("Success");
    // console.log(req.body);
    var query = "SELECT m_pd.reg_no, m_pd.name, SUM(gpa)/COUNT(*) AS Average FROM m_pd LEFT JOIN t_sd ON m_pd.sid=t_sd.sid GROUP BY t_sd.sid ORDER BY t_sd.cgpa DESC;";
    connection.query(query, (err, result)=>{
        if(err){
            console.log(err);
            res.send("Couldn't find data!");
        }
        else{
            // console.log(result);
            res.send(result);
        }
    });
  });

module.exports = student_router;

/*
{
        "name":"Dakshin S",
        "regno":"312419205022",
        "rollno":"19IT1123",
        "degree":"B. Tech",
        "branch":"IT",
        "dob":"2001-09-06",
        "age":"20",
        "gender":"Male",
        "tadd":"Chennai",
        "padd":"Arrakonam",
        "mn":"9876543210",
        "mailid":"dakshin@gmail.com",
        "hd":"D"
    }

*/
/*
DELIMITER $$

USE `smp`$$

DROP TRIGGER /*!50032 IF EXISTS */ 
/*`udcalcage`$$

CREATE
    /*!50017 DEFINER = 'root'@'localhost' */
/*    TRIGGER `udcalcage` BEFORE UPDATE ON `m_pd` 
    FOR EACH ROW 
BEGIN
	SET new.age = FLOOR( DATEDIFF( CURDATE(), new.dob ) / 365 );
END;
$$

DELIMITER ;
*/