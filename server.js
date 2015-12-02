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
//Expuser.screen_namee directories
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
    if(err){
      res.send(err);
    }
    else{
      res.send(data);
    }
  });

});
//Get tweet streams
io.on('connection', function (socket) {
  console.log('Streaming Tweets');
  //to prevent defaults
  var id_checker=[];
 var stream = T.stream('statuses/filter', { track: '#nowplaying'})
  stream.on('tweet', function (tweet) {
    urls=tweet.entities.urls;

    for(var u in urls){
      yt=urls[u].display_url;
      if (yt.indexOf("youtube.com") !=-1 && id_checker.indexOf(tweet.id) == -1) {
        yt_id=yt.replace('youtube.com/watch?v=','');
        io.sockets.emit('stream',tweet,yt_id);
        console.log('I am streaming a tweet from @'+tweet.user.screen_name);
        id_checker[id_checker.length]=tweet.id;
        break;
      }
      else if(yt.indexOf("youtu.be") !=-1 && id_checker.indexOf(tweet.id) == -1){
        yt_id=yt.replace('youtu.be/','');
        io.sockets.emit('stream',tweet,yt_id);
        console.log('I am streaming a tweet from @'+tweet.user.screen_name);
        id_checker[id_checker.length]=tweet.id;
        break;
      }
    }
  });
 });

http.listen(3000, function(){
  console.log('#nowplaying is running on http://localhost:3000');
});