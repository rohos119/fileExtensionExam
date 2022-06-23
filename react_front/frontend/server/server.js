const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;
const cors = require('cors');


var corsOptions = {
    origin : 'http://localhost:3000' //react 콜 permission
}

const mysql = require('mysql');
const connection = mysql.createPool({
    host : '143.244.178.231',
    user : 'root',
    password : '138096d1~~Da',
    database : 'fileExtension'
});


app.use(cors(corsOptions));

const test = require('./Router/test');

// app.use('/', test);
app.get("/", (req, res) => {
    const sqlQuery = "SELECT * FROM defaultExtension ";
    connection.query(sqlQuery, (err, result) => {
      if (err) {
        console.log('error connecting :' + err.stack);
        return;
      }else{
        res.send("success!");
      }
        
      console.log(result)
    });
  });
 //React가 3000번 포트를 사용하기 때문에 node 서버가 사용할 포트넘버는 다른 넘버로 지정해준다.
app.listen(PORT, ()=>{console.log(`Listening on port ${PORT}`)});