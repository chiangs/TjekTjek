angular.module('appModule', ['authModule', 'nav']).config(
		function($routeProvider) {
			$routeProvider.when('/', {
				template : '<login></login>'
			})
		})