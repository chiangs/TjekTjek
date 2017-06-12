angular.module('todo').factory(
		'todoService', 
		function($http, $filter, authService, $location, $rootScope) {
			var service = [];
			
			var BASE_URL = 'http://localhost:8080/TjekTjek/REST/';
			
			var todos = [];
			
			var competeDate = '';
			
			var checkLogin = function() {
				if (!authService.getToken().id) {
					$location.path('/login');
				}
			}
			
			service.index = function() {
				if (!authService.getToken().id) {
					$location.path('/login');
				}
			}
			
			
			return service;
		})