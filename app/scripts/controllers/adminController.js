/**
 * Created by bsrin2 on 6/5/2014.
 */
// using strict js
'use strict';
// Comment below for js hint to ignore issues if any and render the page
/*global $:false */
app.controller('AdminController', ['$scope','dataService',function ($scope,dataService) {
    $scope.adminFirebase = dataService.getData('admin');
    $scope.adminFirebase.$bind($scope, 'admin');
    $scope.removeAdmin=function(delIndex){
        $scope.admin.adminArr.splice(delIndex,1);
    };
    $scope.addMember=function(){
        //$scope.NewMember=$scope.NewMember.reverse();
        $scope.admin.adminArr.push($scope.NewMember);
        $scope.NewMember={};
    };
}]);