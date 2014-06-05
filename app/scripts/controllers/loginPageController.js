/**
 * Created by bsrin2 on 6/5/2014.
 */
// using strict js
'use strict';
// Comment below for js hint to ignore issues if any and render the page
/*global $:false */



app.controller('LoginCtrl', ['$scope', 'Data', 'personalMsgService', 'BroadCastMsgService', function ($scope, Data, service, bCastMsgs) {
  $scope.Data = Data;
  $scope.bcastmsgs = bCastMsgs;
  service.$bind($scope, 'messages');
  console.log($scope.Data.DisplayName);
  $scope.modalShown = false;
  $scope.toggleModal = function() {
	$("#emailId").val("");
	$("#pwd").val("");
    $scope.modalShown = !$scope.modalShown;
  };
  
  $scope.getPersonalMessages = function() {
	var personalMsgArr = [];
	$.each($scope.messages, function( keyUser, val ) {
		if ($scope.Data.ChildId == val.id) {
			personalMsgArr.push(val.text);
		}
	  });  
	};
}]);