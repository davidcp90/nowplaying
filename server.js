//Dependencies
var express = require('express');
var app = express();
var http = require('http').Server(app);
var Twit = require('twit');
var io = require('socket.io')(http);
//Twit Configuration
var T = new Twit({
    consumer_key:'TrLAeCRrU2tEyRVNATWkaPXaT',
    consumer_secret: 'PW4XQYJOiybEiVrgFrmYEsNRo1Gu7fk6y82qjfRTXs3o8UTfQU', 
    access_token:'4329597197-HCDI7jcRpDvDzH3SgRK7AvVsOJgNLN6b74c6TfP',
    access_token_secret: 'XARevxyZTC6ssQdoZkQBOKAYCGhfhDFCRgaV5EW9jc8xh'
});
//Expose directories
app.use('/dist', express.static(__dirname + '/dist'));
app.use('/bower_components', express.static(__dirname + '/bower_components'));
app.use('/js', express.static(__dirname + '/js'));
//Main URL
app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});
//URLs to get twitter info
app.get('/caramba', function(req, res){
 T.get('search/tweets', { q: '#apple', count: 5 }, function(err, data, response) {
  console.log(data);
});
});
//POST  tweet Method
app.get('/tweet-it', function(req, res){
var tw_msg=req.query.message;

T.post('statuses/update', { status: tw_msg }, function(err, data, response) {
  console.log('errors'+err);
  console.log('data'+data);
  console.log('response'+response);
  if(err){
    res.send(err);
  }
  else{
    res.send(data);
  }
});

});
io.on('streamtw', function(socket){
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
  console.log('a user connected');
});
http.listen(3000, function(){
  console.log('#nowplaying is running on http://localhost:3000');
});