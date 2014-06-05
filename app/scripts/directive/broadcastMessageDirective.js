/**
 * Created by bsrin2 on 6/5/2014.
 */
// using strict js
'use strict';
// Comment below for js hint to ignore issues if any and render the page
/*global $:false */
//creating directive
app.directive('BroadCastMessage',function(){
    return{
        restrict:'E',
        templateUrl: 'views/adminParent.html'
    };
});