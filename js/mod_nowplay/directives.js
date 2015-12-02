define(function  (require) {
   'use strict';

   var angular = require('angular');

   return angular.module('mod_nowplay.directives', [])
        .directive('resources',function  () {
            return {
                restrict: 'E',
                 templateUrl: function(elem,attrs) {
                   return '/static/angular/discussions/partialviews/resources.html';
                },
                controller: 'ResourcesViewController',
            }
        })

});