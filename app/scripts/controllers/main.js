'use strict';
/*global $:false */
app.factory('childrenService', ['$firebase', function($firebase) {
    var listRef = new Firebase('https://daycareapp.firebaseio.com/children');
    return $firebase(listRef);
}]);
app.controller('MainCtrl', ['$scope','childrenService',function ($scope,service) {
    service.$bind($scope, 'children');
    $scope.childTopickDrop=[];
    $scope.childGender;
    $scope.changeButtonColor=function(event){
    	$(event.target).toggleClass('active');
    }
	$scope.sortChild="age";
    $scope.slectChild=function(event){
    	//console.debug(event);
        var count=0;
        var temp;
    	$(event.target).toggleClass('list-group-item-success');
        $scope.childTopickDrop.push($(event.target).attr('id'));
            for(var i=0;i<$scope.childTopickDrop.length;i++){
                if($(event.target).attr('id')==$scope.childTopickDrop[i]){
                    if(count==0){
                    temp=i;
                    }
                count++;
                if(count>1){
                    $scope.childTopickDrop.splice(i,1);
                    $scope.childTopickDrop.splice(temp,1);
                }
                }
            }
    };
    $scope.broadcastMsg=function(){
    	$scope.babyMessage='';
    };

    $scope.pickUp=function(){
        var selectedChildren=$scope.childTopickDrop;
        if(selectedChildren.length!=0){
            for(var i=0;i<selectedChildren.length;i++){
                for(var j=0;j<$scope.children.length;j++){
                    if(selectedChildren[i]==$scope.children[j].uid && $scope.children[j].picked=='NotPicked'){
                        $scope.children[j].picked='picked';
                    }
                }
            }
        }
    }

    $scope.check=function(){alert($scope.childGender);}

    $scope.$watch('childTopickDrop',function(){
       if($scope.childTopickDrop.length==0){
            $('.pickDrop').hide();
        }
        else if($scope.childTopickDrop.length>0)
            {$('.pickDrop').show();
        }

    },true);
}]);