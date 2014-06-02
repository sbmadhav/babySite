'use strict';
/*global $:false */
app.factory('childrenService', ['$firebase', function($firebase) {
    var listRef = new Firebase('https://daycareapp.firebaseio.com/children');
    return $firebase(listRef);
}]);
app.controller('MainCtrl', ['$scope','childrenService',function ($scope,service) {
    service.$bind($scope, 'children');
}]);