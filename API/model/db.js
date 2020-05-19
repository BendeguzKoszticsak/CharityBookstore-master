var mysql = require('mysql');
var express    = require("express");

var connection = mysql.createConnection({
    host     : 'book-store.ctky7lpzveky.eu-central-1.rds.amazonaws.com',
    port     : '3306',
    user     : 'admin',
    password : 'sqlserver',
    database : 'BookStore'
});

var app = express();
connection.connect(function(err) {
    if (err) throw err;
});

module.exports = connection;
