define(function(require) {
    'use strict';

    var angular = require("angular"),
        angularroute = require('angular-route'),
        angularAMD = require('angularAMD'),
        controllers = require("controllers"),
        directives = require("directives"),
        services = require("services");
    var app = angular.module('mod_nowplay', [
            'ngRoute',
            controllers.name,
            services.name,
            directives.name,
        ])
        .config(['$routeProvider', '$interpolateProvider', '$httpProvider',
            function($routeProvider, $interpolateProvider, $httpProvider) {
                $interpolateProvider.startSymbol('{$');
                $interpolateProvider.endSymbol('$}');
                var token = $('input[name=csrfmiddlewaretoken]').val();
                $httpProvider.defaults.headers.post['X-CSRFToken'] = token;
                $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
            }
        ]);


    return angularAMD.bootstrap(app);
});