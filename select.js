var mysql =  require('mysql');

var connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'entregas'
});

connection.connect();

connection.query('select * from entregas', function (err, result){
    console.log(result);
    return;
});