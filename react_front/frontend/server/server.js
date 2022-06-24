const express = require('express');
var app = express();
const cors = require('cors');

let corsOptions = {
    origin: "*", 
    credential: true,
  };

app.use(cors(corsOptions));

const mysql = require('mysql');
const bodyParser = require('body-parser');
app.use(bodyParser());

const PORT = process.env.PORT || 5000;



const connection = mysql.createConnection({
    host : '143.244.178.231',
    user : 'root',
    password : '138096d1~~Da',
    database : 'fileExtension'
});
connection.connect((err)=>{
    if(err) throw err;
    console.log('connected');
});

app.get('/api/getDefault', (req, res)=>{
    const sqlQuery = "SELECT * FROM defaultExtension; ";
    connection.query(sqlQuery,(err,result) =>{
        if (err) throw err;
        res.send(result);    
    });
    
  });
app.post('/api/updateDefault', (req,res)=>{
    var ex_name =req.body.name;
    var ex_apply =req.body.apply;
    const sqlUpdateQuery = "UPDATE defaultExtension SET apply = ? WHERE name = ?";
    connection.query(sqlUpdateQuery,[ex_apply,ex_name],(err,result) =>{
        if(err) throw err;
        res.send(result);
    });
});
app.post('/api/updateCustom', (req,res)=>{
    var ex_name =req.body.name;
    var ex_apply =req.body.apply;
    const sqlUpdateQuery = "UPDATE defaultExtension SET apply = ? WHERE name = ?";
    connection.query(sqlUpdateQuery,[ex_apply,ex_name],(err,result) =>{
        if(err) throw err;
        res.send(result);
    });
});
app.listen(PORT, ()=>{console.log(`Listening on port ${PORT}`)});

