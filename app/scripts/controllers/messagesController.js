/**
 * Created by bsrin2 on 6/5/2014.
 */
// using strict js
'use strict';
// Comment below for js hint to ignore issues if any and render the page
/*global $:false */
app.controller('MessagesController', ['$scope','dataService',function ($scope,dataService) {
    $scope.messages = dataService.getData('messages');
}]);