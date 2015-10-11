var mysql =  require('mysql');

var connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'entregas'
});

connection.connect();

var entrega = {
    id_pedido : 3,
    id_cliente: 3,
    nome: 'Teste',
    cpf : '123.456.789-00',
    rec_comp : 'COMPRADOR',
    date_time : '2015-07-09 20:20:00',
    localizacao : 'Santa Rita do Sapucai'
};

connection.query('insert into entregas set ?', entrega, function (err,result){
    if(err){
        console.error(err);
        return;
    }
    console.error(result);
    return;
});