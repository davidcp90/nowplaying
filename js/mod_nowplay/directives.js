define(function  (require) {
   'use strict';

   var angular = require('angular');

   return angular.module('mod_nowplay.directives', [])
        .directive('tweet',function  () {
            return {
                restrict: 'E',
                 templateUrl: function(elem,attrs) {
                   return '/js/mod_nowplay/partialviews/tweet.html';
                },
                            controller: 'TweetController',
            }

        })

});