/**
 * ANGULAR ROUTES
 */

'use strict';

var app = angular.module('js_analyzer', ['ngRoute']);

app.config(['$routeProvider', function ($routeProvider) {
	$routeProvider.when('/', { templateUrl: 'template/main.html', controller: 'indexCtrl' });
    $routeProvider.otherwise({ redirectTo: '/404' });
}]);

app.filter('unique', function() {
   return function(collection, keyname) {
      var output = [], 
          keys = [];

      angular.forEach(collection, function(item) {
          var key = item[keyname];
          if(keys.indexOf(key) === -1) {
              keys.push(key);
              output.push(item);
          }
      });

      return output;
   };
});