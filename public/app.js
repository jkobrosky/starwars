angular.module('starWarsTrivia', ['ngRoute'])

.config(function($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: './public/views/home.html',
		controller: 'HomeController'
	})

	.otherwise({
		redirectTo: '/'
	})
});