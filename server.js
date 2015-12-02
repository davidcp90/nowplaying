//Dependencies
var express = require('express');
var app = express();
var http = require('http').Server(app);
var Twit = require('twit');
var io = require('socket.io')(http);
//Twit Configuration
var T = new Twit({
  consumer_key:'CXVNsTDohsJaIxl0cjpuLKXYr',
  consumer_secret: 'Y49dNi2NPN9vJaPS95QnRLslOqisEuC7v934lHOfN05cVjbtDB', 
  access_token:'2834545563-QYQqm8hnLPiU3eFyAD8SGtKhfIYW7gMp8fGh8Xd',
  access_token_secret: 'SUquQt3XC2ve3IIa8JbwMa4bsRCpZSJuCVKYAXLUTDBBT'
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
//Post  tweet Method
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
//Get tweet streams
io.on('streamtw', function(socket){
  socket.on('disconnect', function(){
    console.log('stream stopped');
  });
  var stream = T.stream('statuses/filter', { track: '#apple', language: 'en' })
  stream.on('tweet', function (tweet) {
    console.log(tweet)
  })
});
http.listen(3000, function(){
  console.log('#nowplaying is running on http://localhost:3000');
});