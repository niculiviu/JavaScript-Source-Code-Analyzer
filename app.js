/**
 * ANGULAR ROUTES
 */

'use strict';

var app = angular.module('js_analyzer', ['ngRoute']);

app.config(['$routeProvider', function ($routeProvider) {
	$routeProvider.when('/', { templateUrl: 'template/main.html', controller: 'indexCtrl' });
    $routeProvider.otherwise({ redirectTo: '/404' });
}]);