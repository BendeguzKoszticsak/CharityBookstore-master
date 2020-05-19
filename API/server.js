const express = require('express'),
  app = express(),
  bodyParser = require('body-parser');
  port = process.env.PORT || 3000;


const mysql = require('mysql');
var cors = require('cors')
app.use(cors());
const mc = mysql.createConnection({
    host     : 'book-store.ctky7lpzveky.eu-central-1.rds.amazonaws.com',
    port     : '3306',
    user     : 'admin',
    password : 'sqlserver',
    database : 'BookStore'
});
 

mc.connect();

app.listen(port);

console.log('API server started on: ' + port);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./routes/approutes');
routes(app); 
