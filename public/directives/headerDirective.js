angular.module('starWarsTrivia')

.directive('headerDirective', function() {
	return {
		restrict: 'EA',
		templateUrl: './views/header.html'
	}
})