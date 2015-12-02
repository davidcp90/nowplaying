define(function (require){
  'use strict';
  var angular = require('angular');
  var io = require('socket.io');
  var socket = io();
  return angular.module('mod_nowplay.controllers', []).
  controller('TweetsController', ['$scope', 'TweetService',
    function($scope, TweetService){
          /*-----------------------------------------------------------------------
          Tweets Controller
          This controls the module for the tweets stream, allowing 
          the app to get and show tweets
          --------------------------------------------------------------------------*/
          var s=$scope;
          var count=0;
          s.counter=count;
          socket.on('stream', function(tweet,yt_id){
            if(count==0){
              
            }
           console.log(tweet);
           var new_tweet=$('#template').clone()
           new_tweet.attr('tweet'+yt_id);
           new_tweet.find('.embed-responsive iframe').attr('src','https://www.youtube.com/embed/'+yt_id);
           new_tweet.find('.tw-p').html(tweet.text);
           new_tweet.find('picture').append('<img class="img-responsive img-circle" src="'+tweet.user.profile_image_url+'" alt=photo "'+tweet.user.name+'"/>');
           new_tweet.find('.user-name').html(tweet.user.name);
           new_tweet.find('.date-stamp').html(tweet.created_at);
           new_tweet.find('.username').html('@'+tweet.user.screen_name);
           new_tweet.appendTo('#tw-container').removeClass('hide');
           count++;
           tweet=null;

           yt_id=null;
           if(s.count==10){
            socket.disconnect(); 
            $('#prefetcher').fadeOut('fast');
            s.count=0;
           }
         });
          s.reconnect=function(){
            socket.connect();
          }
   }]).
  controller('ShareController', ['$scope', 'TweetService',
    function($scope, TweetService){
          /*-----------------------------------------------------------------------
          Share Controller
          This controls the module for post tweets with a youtube url
          and a comment including the hashtag #NowPlaying
          --------------------------------------------------------------------------*/
          var s=$scope;
          s.youtube='';
          s.comment='';
          s.hashtag='#nowplaying via @BInowplaying';
          var default_cta='<i class="fa fa-twitter"></i> Tweet to #nowplaying';
      //This function check if the youtube link is valid with a RegEx
      function youtubeValid(url) {
        var p = /^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;
        return (url.match(p)) ? true : false;
      };
      //This function change the cta in order to use it as reporter
      function changeCta(btnclass , message,re){
        var cta=$('#tweet-cta')
        //check if the button is in wait mode
        if(cta.hasClass('btn-warning')){
          cta.removeClass('btn-warning');
        }
        //this is the main function that changes the appearence of the btn to report
        cta.animate({opacity: 0.8}).removeClass('btn-info').addClass(btnclass)
        .html(message).animate({opacity: 1});
        //check if we need to regenerate the button to their original state
        if(re){
        //restore is a var function that regenerate the button to their original state
        console.log(re);
        var restore= function(){cta.animate({opacity: 0.8}).addClass('btn-info').removeClass(btnclass)
        .html(default_cta).animate({opacity: 1})};
        setTimeout(restore, 5000);
      }
    };
    //this function validates the user input
    s.checkTweet = function(){
      var r=false;
      if(youtubeValid(s.youtube)){
        if (s.comment != ''){
          if(s.comment.length+s.youtube.length+s.hashtag.length <= 140){
            r=true;
          }
          else{
            var error='<i class="fa fa-exclamation-circle"></i> You write more than 140 chars';
            changeCta('btn-danger',error,true);
          }

        }
        else{
          var error='<i class="fa fa-exclamation-circle"></i> Please Write a Comment';
          changeCta('btn-danger',error,true);
        }
      }
      else{
        var error='<i class="fa fa-youtube"></i> Invalid Youtube URL';
        changeCta('btn-danger',error,true);
      }
      return r;
    };
     /*this function handles the ng-click of the main-cta, results in a error report on the main cta
     or in a succesful tweet */
     s.postTweet = function(){
      if(s.checkTweet()){
        var wait='<i class="fa fa-spinner fa-spin"></i> Wait for it...';
        changeCta('btn-warning',wait,false);
        var message=s.comment+' '+s.youtube+' '+s.hashtag;
        TweetService.postTweet(message)
        .then(function (data) {
          var suc='<i class="fa fa-check"></i> Succesfully tweeted';
          changeCta('btn-success',suc,true);
          s.youtube='';
          s.comment='';
        });
      }
    };
  }])
.controller('TweetController',['$scope',
  function  ($scope) {
  }])
})