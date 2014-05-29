'use strict';
/*global $:false */
app.factory("childrenService", ["$firebase", function($firebase) {
    var listRef = new Firebase("https://daycareapp.firebaseio.com/children");
    return $firebase(listRef);
}]);
app.controller('MainCtrl', ['$scope','childrenService',function ($scope,service) {
    $scope.children = [];
    service.$bind($scope, "children");
   /* listRef.on('child_added', function(snapshot) {
        $scope.children.push(snapshot.val());
    });*/
    console.log($scope.children);
    $scope.slectChild=function(event){
    	console.debug(event);
    	//alert($(this).attr('id'));
    	// $('li').removeClass('list-group-item-success');
    	$(event.target).toggleClass('list-group-item-success');
    };
  }]);
