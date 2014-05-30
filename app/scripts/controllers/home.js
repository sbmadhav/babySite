'use strict';
/*global $:false */


//pranoy
app.controller('BroadCastController', function ($scope) {
	  $scope.bcastmsgs = [
		{text:'Praesent faucibus cursus aliquet. Quisque sit amet aliquam libero.'},
		{text:'Morbi vulputate tempor nunc vestibulum vestibulum. Vivamus bibendum condimentum purus, eget tincidunt lorem porttitor eget.'},
		{text:'Praesent sollicitudin ac ligula quis volutpat. Mauris eu mollis ante, ut tincidunt justo.'},
		{text:'Nunc a semper dui. Proin posuere tincidunt ultricies. '},
		{text:'Vestibulum facilisis pulvinar justo eget volutpat. Nullam luctus ut tortor quis pulvinar'},
		{text:'Morbi vulputate tempor nunc vestibulum vestibulum. Vivamus bibendum condimentum purus, eget tincidunt lorem porttitor eget.'}	
	  ];
	 
	  /*$scope.addTodo = function() {
		$scope.todos.push({text:$scope.todoText, done:false});
		$scope.todoText = '';
	  };
	 
	  $scope.remaining = function() {
		var count = 0;
		angular.forEach($scope.todos, function(todo) {
		  count += todo.done ? 0 : 1;
		});
		return count;
	  };
	 
	  $scope.archive = function() {
		var oldTodos = $scope.todos;
		$scope.todos = [];
		angular.forEach(oldTodos, function(todo) {
		  if (!todo.done) $scope.todos.push(todo);
		});
	  };*/	
  
  
	 
	$("marquee").hover(function () { 
			this.stop();
		}, function () {
			this.start();
	});
	
	setTimeout(function(){		
		$(".bcastmsgs li").each(function() {
			//$(this).textEffect();
			//$(this).textEffect('fade');
			//$(this).textEffect('grow');
			$(this).textEffect({
				effect: 'slide',
				effectSpeed: 30,
				completionSpeed: 10000,
				jumbleColor: '#7f7f7f'
			}, function() {
				
			});
			//$(this).textEffect('slide');
			//$(this).textEffect('dropdown');
		});
	}, 500);    
});


app.directive('modalDialog', function() {
  return {
    restrict: 'E',
    scope: {
      show: '='
    },
    replace: true, // Replace with the template below
    transclude: true, // we want to insert custom content inside the directive
    link: function(scope, element, attrs) {
      scope.dialogStyle = {};
      if (attrs.width)
        scope.dialogStyle.width = attrs.width;
      if (attrs.height)
        scope.dialogStyle.height = attrs.height;
      scope.hideModal = function() {
        scope.show = false;
      };
    },
    template: "<div class='ng-modal' ng-show='show'><div class='ng-modal-overlay' ng-click='hideModal()'></div><div class='ng-modal-dialog' ng-style='dialogStyle'><div class='ng-modal-close' ng-click='hideModal()'>X</div><div class='ng-modal-dialog-content' ng-transclude></div></div></div>"
  };
});

app.controller('LoginController', ['$scope', function($scope) {
  $scope.modalShown = false;
  $scope.toggleModal = function() {
	$("#emailId").val("");
	$("#pwd").val("");
    $scope.modalShown = !$scope.modalShown;
  };
}]);
