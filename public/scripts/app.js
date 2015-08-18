angular.module('starWarsTrivia', ['ngRoute'])

.config(function($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: './views/home.html',
		controller: 'HomeController'
	})

	.otherwise({
		redirectTo: '/'
	})
});