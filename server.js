//Dependencies
var express = require('express');
var app = express();
var http = require('http').Server(app);
//Expose directories
app.use('/dist', express.static(__dirname + '/dist'));
app.use('/bower_components', express.static(__dirname + '/bower_components'));
app.use('/js', express.static(__dirname + '/js'));
//Main URL
app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});
//Notify that server is running
http.listen(3000, function(){
  console.log('#nowplaying is running on http://localhost:3000');
});