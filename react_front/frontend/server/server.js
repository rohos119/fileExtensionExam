const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const cors = require('cors');
const mysql = require('mysql');
const bodyParser = require('body-parser');


var corsOptions = {
    origin : 'http://localhost:3000',
    credential : true //react 콜 permission
}


const connection = mysql.createConnection({
    host : process.env.host,
    user : process.env.user,
    password : process.env.password,
    database : process.env.database
});
connection.connect((err)=>{
    if(err) throw err;
    console.log('connected');
});

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

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

