angular.module('appModule', ['authModule', 'nav', 'ngRoute', 'static']).config(
		function($routeProvider) {
			$routeProvider.when('/', {
				template : '<login></login>'
			}).when('/todo/', {
				template : '<todo-list></todo-list>'
			}).when('/profile', {
				template : '<profile></profile>'
			}).when('/contact', {
				template : '<contact></contact>'
			}).otherwise({
				template : '<error></error>'
			})
		})