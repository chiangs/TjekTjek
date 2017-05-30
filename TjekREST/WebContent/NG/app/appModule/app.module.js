angular.module('appModule', ['authModule', 'nav', 'ngRoute', 'static']).config(
		function($routeProvider) {
			$routeProvider.when('/', {
				template : '<login></login>'
			})
		})