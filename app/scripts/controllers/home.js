'use strict';

angular
  .module('angNewsApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
  ])
  .controller("BroadCastController", function ($scope) {
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
} 
  
  
$(window).load(function() {  
	$("marquee").hover(function () { 
		this.stop();
	}, function () {
		this.start();
	});
});