const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const cors = require('cors');
const mysql = require('mysql');
const bodyParser = require('body-parser')


var corsOptions = {
    origin : 'http://localhost:3000',
    credential : true //react 콜 permission
}


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

// connection.connect((err) => {
//     if(err) {
//         console.log('error connection : ' + err.stack);
//         return;
//     }
//     console.log('success DB');
// });

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
app.listen(PORT, ()=>{console.log(`Listening on port ${PORT}`)});