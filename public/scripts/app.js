angular.module('starWarsTrivia', ['ngRoute'])

.config(function($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: '/public/view/home.html',
		controller: 'HomeController'
	})

	.otherwise({
		redirectTo: '/'
	})
});