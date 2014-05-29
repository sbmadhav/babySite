'use strict';

angular
  .module('angNewsApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/adminMain',{
        templateUrl: 'views/main.html',
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
