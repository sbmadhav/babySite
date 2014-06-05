/**
 * Created by bsrin2 on 6/5/2014.
 */
// using strict js
'use strict';
// Comment below for js hint to ignore issues if any and render the page
/*global $:false */



app.controller('LoginCtrl', ['$scope', 'Data', 'dataService', function ($scope, Data, dataService) {
  $scope.Data = Data;
  $scope.key = "NA";
  $scope.personalKey = $scope.Data.ChildId;
  $scope.bcastmsgs = dataService.getData('message');	
  console.log($scope.Data.DisplayName);
  $scope.modalShown = false;
  $scope.toggleModal = function() {
	$("#emailId").val("");
	$("#pwd").val("");
    $scope.modalShown = !$scope.modalShown;
  };  
}]);