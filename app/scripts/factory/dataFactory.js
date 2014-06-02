/** Binding Angular $scope model data with firebase data store
 *  This creates 3 way binding with the data*/
// using strict js
  'use strict';
// Comment below for js hint to ignore issues if any and render the page
/*global $:false */

//binding children data
app.factory('childrenService', ['$firebase', function($firebase) {
    var ref = new Firebase('https://daycareapp.firebaseio.com/children');
    return $firebase(ref);
}]);
app.controller('ChildrenController', ['$scope','childrenService',function ($scope,service) {
    service.$bind($scope, 'children');
}]);
//binding parents data
app.factory('parentsService', ['$firebase', function($firebase) {
    var ref = new Firebase('https://daycareapp.firebaseio.com/parents');
    return $firebase(ref);
}]);
app.controller('ParentsController', ['$scope','parentsService',function ($scope,service) {
    service.$bind($scope, 'parents');
}]);
//binding admin data
app.factory('adminService', ['$firebase', function($firebase) {
    var ref = new Firebase('https://daycareapp.firebaseio.com/admin');
    return $firebase(ref);
}]);
app.controller('AdminController', ['$scope','adminService',function ($scope,service) {
    service.$bind($scope, 'admin');
}]);
//binding messages data
app.factory('messagesService', ['$firebase', function($firebase) {
    var ref = new Firebase('https://daycareapp.firebaseio.com/messages');
    return $firebase(ref);
}]);
app.controller('MessagesController', ['$scope','messagesService',function ($scope,service) {
    service.$bind($scope, 'messages');
}]);
//binding auxilary data
app.factory('auxService', ['$firebase', function($firebase) {
    var ref = new Firebase('https://daycareapp.firebaseio.com/aux');
    return $firebase(ref);
}]);
app.controller('AuxController', ['$scope','auxService',function ($scope,service) {
    service.$bind($scope, 'aux');
}]);

