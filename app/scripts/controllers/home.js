'use strict';
/*global $:false */

var regLoginClicked = false;

//pranoy
app.controller('BroadCastController', ['$scope','loginService', 'Data', function ($scope, service, Data) {
	  service.$bind($scope, 'userArr');
	  $scope.Data = Data;
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


var directives = angular.module('directives', []);
directives.directive('testDirective', function($compile, $location) {
    return {
        restrict: 'EAC',
        template: "<div class='collapse navbar-collapse' id='bs-example-navbar-collapse-1'>" +
					"<ul class='nav navbar-nav pull-right'>" +
					"	<li><a href='#'>Home</a></li>" + 
					"	<li><a id='login' class='login' data-toggle='popover'>Login</a></li> " + 
					"	<li><a href='#'>Contact Us</a></li>      </ul> </div>  " +
					  
                  "<div id='pop-over-content' style='display:none'><button class='btn btn-primary' ng-click='testFunction()'>Ok</button></div>",
        link: function(scope, elements, attrs) {
            $("#login").popover({
                'placement': 'bottom',
                'trigger': 'click',
                'html': true,
                'container': 'body',
                'content': function() {
                    return $compile($("#popover_login").html())(scope);
                }
            });
  
            scope.showRegister = function() {
				regLoginClicked = true;			
				$(".popover-content").html(
					function() {
						return $compile($("#popover_register").html())(scope);
					}
				);				
			}		
			
			scope.showLogin = function() {
				regLoginClicked	= true;
				$(".popover-content").html(
					function() {
						return $compile($("#popover_login").html())(scope);
					}
				);				
			}
			
			scope.socialAuthUser = function(provider) {
				  var chatRef = new Firebase('https://daycareapp.firebaseio.com');
				  var auth = new FirebaseSimpleLogin(chatRef, function(error, user) {
					  if (error) {
						  // an error occurred while attempting login
						  console.log(error);
					  } else if (user) {
						$.each( scope.userArr, function( keyUser, val ) {
							if (keyUser == "userArr") {
								$.each( val, function( index,  value) {								
									$.each( value, function( key,  values) {
										switch (key) {
											case "facebook": if (values == user.id) {
																console.log(value.childId);
																scope.Data.DisplayName = value.displayName;
																scope.Data.ChildId = value.childId;															
																$("#login").popover('hide');																
																$location.url('/Login');
																return false;
															}
															break;
											case "google":   if (values == user.id) {
																scope.Data.DisplayName = value.displayName;
																scope.Data.ChildId = value.childId;
																$("#login").popover('hide');
																$location.url('/Login');
																return false;
															}
															break;
											case "twitter":  if (values == user.id) {
																scope.Data.DisplayName = value.displayName;
																scope.Data.ChildId = value.childId;
																$("#login").popover('hide');
																$location.url('/Login');
																return false;
															}
															break;
																
											default: console.log("invalid");
										}								
										console.log(key + " " +values);
										//items.push( "<li id='" + key + "'>" + val + "</li>" );
									});								
								});
							}
						});
					  
						  // user authenticated with Firebase
						  console.log(user);
						  console.log('User ID: ' + user.id + ', Provider: ' + user.provider);
						  						  
						  //if (
					  } else {
						  // user is logged out
					  }
				  });
				  auth.login(provider);
			  };

			  scope.normalAuth = function() {
				$.each( scope.userArr, function( keyUser, val ) {
					if (keyUser == "userArr") {
						$.each( val, function( index,  value) {	
								if (scope.loginUser == value.emailId && scope.loginPwd == value.password) {
									scope.Data.DisplayName = value.displayName;
									scope.Data.ChildId = value.childId;
									$("#login").popover('hide');
									$location.url('/Login');
									console.log();
									return false;
								}							
						});
					}
				});	
			  };
        }
    }
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

app.controller('LoginCtrl', function ($scope, Data) {
  $scope.Data = Data;
  console.log($scope.Data.DisplayName);
  $scope.modalShown = false;
  $scope.toggleModal = function() {
	$("#emailId").val("");
	$("#pwd").val("");
    $scope.modalShown = !$scope.modalShown;
  };
  
  
  
});
