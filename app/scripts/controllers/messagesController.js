/**
 * Created by bsrin2 on 6/5/2014.
 */
// using strict js
'use strict';
// Comment below for js hint to ignore issues if any and render the page
/*global $:false */
app.controller('MessagesController', ['$scope','dataService',function ($scope,dataService) {
//alert();
    $scope.messagesFirebase = dataService.getData('message');
    $scope.messagesFirebase.$bind($scope, 'message');
    $scope.showHideMsgBtn=true;
    $scope.NewMessage={};
    $scope.changeButtonColor=function(event){
        //alert($(event.target).attr('class'));
        $('a').removeClass('active');
        $(event.target).addClass('active');
        $scope.showHideMsgBtn=!$scope.showHideMsgBtn;
    }
    $scope.broadcastMsg=function(){
        $scope.NewMessage.uid="NA";
        $scope.NewMessage.catagory="broadcast";
        $scope.message.messageArr.push($scope.NewMessage);
        $scope.NewMessage={};
    }
    $scope.PersonalMsg=function(){
        //alert('personal');
    }
}]);