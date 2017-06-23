angular.module('todo').factory(
		'todoService', 
		function($http, $filter, authService, $location, $rootScope) {
			var service = [];
			var todos = [];
			
			var BASE_URL = 'http://localhost:8080/TjekREST/rest/';
			
			var competeDate = '';
			
			var checkLogin = function() {
				if (!authService.getToken().id) {
					$location.path('/login');
				}
			}
			
			service.index = function() {
				checkLogin();
				return $http({
					method : 'GET',
					url : BASE_URL + authService.getToken().id + '/todo'
				}).then(function(res){
					return res;
				})
			}
			
			service.destroy = function(tid) {
				checkLogin();
				return $http({
					method : 'DELETE',
					url : BASE_URL + authService.getToken().id + '/todo/' + tid
				})
			}
			
			
			return service;
		})