'use strict';
/*global $:false */
var app = angular
  .module('angNewsApp', [
	'directives',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
	'firebase'
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
        templateUrl: 'views/adminMain.html'
      })
      .when('/adminMsg',{
        templateUrl: 'views/adminMessage.html'
      })
	  .when('/manageAdmin',{
        templateUrl: 'views/adminParent.html'
      })
      .when('/manageMember',{
        templateUrl: 'views/adminManageMember.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
  
  var userJson = [];