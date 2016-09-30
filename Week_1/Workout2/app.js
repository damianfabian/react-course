var express = require('express');

//NPM Module to integrate Handlerbars UI template engine with Express
var exphbs  = require('express-handlebars');

var app = express();


var winston = require('winston');
winston.level = process.env.NODE_LOG_LEVEL || 'debug';

 winston.log("debug",'Starting Application...');

//Declaring Express to use Handlerbars template engine with main.handlebars as
//the default layout
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// prepare server
//app.use('/api', api); // redirect API calls
app.use('/', express.static(__dirname + '/')); // redirect root
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js')); // redirect bootstrap JS
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist')); // redirect JS jQuery
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css')); // redirect CSS bootstrap

app.use('/css', express.static(__dirname + '/libs/font-awesome/css')); // redirect CSS font-awesome
app.use('/fonts', express.static(__dirname + '/libs/font-awesome/fonts')); // redirect fonts to font-awesome

//Use Custom Router
app.use('/log', require('./routes/log'));

app.get('/', function(req, res) {
	res.send('Hello World!');
});

app.get("/home", function(req, res){
  res.render("home")
});

app.listen(3000, function() {
	winston.log("info",'Example app listening on port 3000!');
});