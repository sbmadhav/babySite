'use strict';
/*global $:false */
var app = angular
  .module('angNewsApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
  ]);
  app.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'BroadCastController'
      })
	  .when('/Login',{
        templateUrl: 'views/Login.html',
        controller: 'LoginCtrl'
      })
      .when('/adminMain',{
        templateUrl: 'views/adminMain.html',
        controller: 'MainCtrl'
      })
      .when('/adminMsg',{
        templateUrl: 'views/adminMessage.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });