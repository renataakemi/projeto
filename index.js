//Dependencies
var bodyParser = require('body-parser');
var express = require('express')

//Express Configuration
var app = express();
app.use(bodyParser.json());

app.get('/',function(req,res){
	res.send('Projeto DM107');
});

//Task API
app.use('/api/tasks', require('./app/taskApi'));

//Server
var server = app.listen(3000, function() {
    console.log('Server running at http://localhost:3000');
});