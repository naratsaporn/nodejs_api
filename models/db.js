const { rejects } = require('assert');
const mysql = require('mysql');

const connection = mysql.createConnection({
    // connectionLimit : 10,
    database : 'store_workshop',
    host: 'localhost',
    password: '',
    user:'root'
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected Success!");
    });
module.exports = connection;