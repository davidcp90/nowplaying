define(function (require){
  'use strict';
  var angular = require('angular');
  return angular.module('mod_nowplay.controllers', []).
  controller('TweetsController', ['$scope', 'TweetService',
    function($scope, TweetService){
    }]).
  controller('ShareController', ['$scope', 'TweetService',
    function($scope, TweetService){
    }])
})