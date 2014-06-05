/** Binding Angular $scope model data with firebase data store
 *  This creates 3 way binding with the data*/
// using strict js
'use strict';
// Comment below for js hint to ignore issues if any and render the page
/*global $:false */

//fetching data from firebase and passing as service
app.factory('dataService', ['$firebase', function($firebase) {
    return {
        getData: function(key) {
            return $firebase(new Firebase('https://daycareapp.firebaseio.com/'+key));
        }
    };
}]);

app.factory('Data', function() {
    return { DisplayName: '', ChildId: '' };
});