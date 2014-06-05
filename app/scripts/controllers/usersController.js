/**
 * Created by bsrin2 on 6/5/2014.
 */
// using strict js
'use strict';
// Comment below for js hint to ignore issues if any and render the page
/*global $:false */
app.controller('UsersController', ['$scope','dataService', 'Data', 'BroadCastMsgService',function ($scope,dataService, Data, bcastmsgs) {
    $scope.user = dataService.getData('user');
    $scope.user.$bind($scope, 'user');
    $scope.Data = Data;
    $scope.bcastmsgs = bcastmsgs;

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


    $('body').on('click', function (e) {
        $('[data-toggle=popover]').each(function () {
            // hide any open popovers when the anywhere else in the body is clicked
            if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.popover').has(e.target).length === 0
                && !$(e.target).is("#loginLink") && !$(e.target).is("#regLink")) {
                $(this).popover('hide');
            }
        });
    });
}]);