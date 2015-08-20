angular.module('starWarsTrivia', ['ngRoute'])

.config(function($routeProvider) {
	$routeProvider
	.when('/home', {
		templateUrl: './views/home.html',
		controller: 'HomeController'
	})

	.when('/rebel', {
		templateUrl: './views/rebel.html',
		controller: 'RebelController'
	})

	.when('/empire', {
		templateUrl: './views/empire.html',
		controller: 'EmpireController'
	})

	.otherwise('/home')
});