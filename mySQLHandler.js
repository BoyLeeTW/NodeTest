let mysql = require('mysql');

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'mydb'
});

function connect(completion) {
    connection.connect(function(err) {
        if (err) {
            completion('Connect failed' + err);
        }
        completion('Connected!');
    });
}

connection.connect(function(err) {
    if (err) throw err;
    console.log('Connected!');
    let sql = 'CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))';
    connection.query(sql, function(err, result) {
        if (err) throw err;
        console.log('Table created');
        console.log('Result: ' + result);
    });
});

exports.connect = connect