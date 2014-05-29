'use strict';
/*global $:false */
angular.module('angNewsApp')
  .controller('MainCtrl', function ($scope) {
    $scope.children = [{
    	'uid':'chn001',
    	'name':'Vishnu',
    	'age':2,
    	'location':'Whitefield'
    },{
    	'uid':'chn002',
    	'name':'Ravi',
    	'age':2,
    	'location':'Whitefield'
    },{
    	'uid':'chn003',
    	'name':'Manish',
    	'age':2,
    	'location':'Whitefield'
    },{
    	'uid':'chn004',
    	'name':'Ahsha',
    	'age':2,
    	'location':'Joynagar'
    },{
    	'uid':'chn005',
    	'name':'varosa',
    	'age':2,
    	'location':'Whitefield'
    },{
    	'uid':'chn006',
    	'name':'Omg',
    	'age':2,
    	'location':'Kuch bhi'
    }
    ];

    $scope.slectChild=function(event){
    	console.debug(event);
    	//alert($(this).attr('id'));
    	// $('li').removeClass('list-group-item-success');
    	$(event.target).toggleClass('list-group-item-success');
    };
  });
