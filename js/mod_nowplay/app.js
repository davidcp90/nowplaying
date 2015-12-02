define(function(require) {
    'use strict';

    var angular = require("angular"),
        angularroute = require('angular-route'),
        angularAMD = require('angularAMD'),
        controllers = require("controllers"),
        services = require("services");
    var app = angular.module('mod_nowplay', [
            'ngRoute',
            controllers.name,
            services.name,
        ])
    return angularAMD.bootstrap(app);
});