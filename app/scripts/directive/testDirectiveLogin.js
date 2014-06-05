/**
 * Created by bsrin2 on 6/5/2014.
 */
// using strict js
'use strict';
// Comment below for js hint to ignore issues if any and render the page
/*global $:false */
//creating directive

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
						$.each( scope.user.userArr, function( keyUser, val ) {
							if (keyUser == "userArr") {
								$.each( val, function( index,  value) {								
									$.each( value, function( key,  values) {
										if (key == "facebook" || key == "google" || key == "twitter") {
											 if (values == user.id) {
																console.log(value.childId);
																scope.Data.DisplayName = value.displayName;
																scope.Data.ChildId = value.childId;															
																$("#login").popover('hide');																
																if (value.type == "admin") { 
																	$location.url('/adminMain');
																} else {									
																	$location.url('/Login');
																}
																return false;
											 }
										}	else {
												console.log("invalid");
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
				$.each( scope.user, function( keyUser, val ) {
					if (keyUser == "userArr") {
						$.each( val, function( index,  value) {	
								if (scope.loginUser == value.emailId && scope.loginPwd == value.password) {
									scope.Data.DisplayName = value.displayName;
									scope.Data.ChildId = value.childId;
									$("#login").popover('hide');
									if (value.type == "admin") { 
										$location.url('/adminMain');
									} else {									
										$location.url('/Login');
									}
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