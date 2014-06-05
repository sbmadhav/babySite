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


app.factory('BroadCastMsgService', function() {
    return { /*[{text:'Praesent faucibus cursus aliquet. Quisque sit amet aliquam libero.'},
     {text:'Morbi vulputate tempor nunc vestibulum vestibulum. Vivamus bibendum condimentum purus, eget tincidunt lorem porttitor eget.'},
     {text:'Praesent sollicitudin ac ligula quis volutpat. Mauris eu mollis ante, ut tincidunt justo.'},
     {text:'Nunc a semper dui. Proin posuere tincidunt ultricies. '},
     {text:'Vestibulum facilisis pulvinar justo eget volutpat. Nullam luctus ut tortor quis pulvinar'},
     {text:'Morbi vulputate tempor nunc vestibulum vestibulum. Vivamus bibendum condimentum purus, eget tincidunt lorem porttitor eget.'}]*/
    };
});