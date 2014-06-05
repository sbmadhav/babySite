/**
 * Created by bsrin2 on 6/5/2014.
 */
// using strict js
'use strict';
// Comment below for js hint to ignore issues if any and render the page
/*global $:false */
app.controller('UsersController', ['$scope', 'Data', 'dataService', function ($scope, Data, dataService) {
	  $scope.key = "NA";
	  $scope.message = dataService.getData('message');	
	  $scope.userArr = dataService.getData('user');		  
	  $scope.Data = Data;
	  
	 
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