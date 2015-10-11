// Dependencies
var express = require('express');
var router = express.Router();
var mysql =  require('mysql');

var connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'entregas'
});

connection.connect();

var notFound = function(res) {
    res.status(404).send('Not found!');
};

router.get('/', function(req, res) {
    connection.query('select * from entregas', function (err, result){
        if(err){
            notFound(err);
        }
        res.json(result);       
    });
});

router.get('/:id', function(req, res) {
    var id = req.params.id;
    if (id){
        connection.query('select * from entregas where id = ?', [id], function (err, result){
            if(err){
                notFound(err);
            }
            res.json(result);       
        });
    }
    else{
        notFound(res);
    }
});

router.post('/', function(req, res) {
    var entrega = {
        id_pedido : req.body.id_pedido,
        id_cliente: req.body.id_cliente,
        nome: req.body.nome,
        cpf : req.body.cpf,
        rec_comp : req.body.rec_comp,
        date_time : req.body.date_time,
        localizacao : req.body.localizacao
    };
    connection.query('insert into entregas set ?', entrega, function (err,result){
        if(err){
             notFound(err);            
        }
        res.status(201).json(entrega);
    }); 
});

router.put('/:id', function(req, res) {
    var id = req.params.id;
    if(id) {
         connection.query('select * from entregas where id = ?', [id], function (err, result){             
             if(err){
                 notFound(err);
             }             
             var itens  = {
                 date_time : req.body.date_time || date_time,
                 localizacao : req.body.localizacao || localizacao        
             };            
                       
             connection.query('UPDATE entregas SET date_time = ?, localizacao = ? WHERE ID = ?',[itens.date_time,itens.localizacao,id], function(err, result) {
                 if(err){
                     notFound(err);                     
                 }
                 res.json(itens);              
             }); 
         });
    }
    else{
        notFound(res);
    }
});

router.delete('/:id', function(req, res) {
    var id = req.params.id;
    if(id) {
        connection.query('delete from entregas where id = ?', [id], function (err,result){
            if(err){
                notFound(err);            
            }
            res.send('Task deleted');
        }); 
    }
    else {
        notFound(res);
    }
});

module.exports = router;