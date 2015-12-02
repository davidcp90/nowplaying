require.config({
  waitSeconds: 200,
  paths:{
  'jquery':'../bower_components/jquery/dist/jquery.min',
  'angular':'../bower_components/angular/angular.min',
  'angularAMD':'../bower_components/angularAMD/angularAMD.min',
  'app': 'mod_nowplay/app',
  'socket.io': '../bower_components/socket.io-client/socket.io',
  'controllers': 'mod_nowplay/controllers',
  'services': 'mod_nowplay/services',
  'init_dom': 'mod_nowplay/init_dom',
  'angular-route': '../bower_components/angular-route/angular-route',
},
shim:{
  'jquery':{
    exports:'jQuery'
  },
  'socket.io':{
    exports:'socket.io'
  },
  'init_dom':['jquery'],
  'angular': {
            exports: 'angular',
  },
  'angularAMD':['angular'],
  'controllers': ['angular'],
  'services': ['angular'],
  'angular-route':['angular'],
  'app':['controllers', 'services','angular'],
},
deps:['app','jquery','socket.io','init_dom']
});
