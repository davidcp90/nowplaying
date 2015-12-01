require.config({
  waitSeconds: 200,
  paths:{
  'jquery':'../bower_components/jquery/dist/jquery.min',
  'angular':'../bower_components/angular/angular.min',
  'angularAMD':'../bower_components/angularAMD/angularAMD.min',
  'app': 'mod_nowplay/app',
  'controllers': 'mod_nowplay/controllers',
  'services': 'mod_nowplay/services',
  'directives': 'mod_nowplay/directives',
  'init_dom': 'mod_nowplay/init_dom',
  'angular-route': '../bower_components/angular-route/angular-route',
},
shim:{
  'jquery':{
    exports:'jQuery'
  },
  'init_dom':['jquery'],
  'angular': {
            exports: 'angular',
  },
  'angularAMD':['angular'],
  'controllers': ['angular'],
  'services': ['angular'],
  'djangular':['angular'],
  'directives':['angular'],
  'angular-route':['angular'],
  'app':['controllers', 'services', 'directives','angular'],
},
deps:['app','jquery','init_dom']
});
