angular.module('todo').factory(
		'todoService', 
		function($http, $filter, authService, $location, $rootScope) {
			var service = [];
			var todos = [];
			
			var BASE_URL = 'http://localhost:8080/TjekREST/rest/';
			
			var competeDate = '';
			
			var checkLogin = function() {
				console.log('in checklogin')
				if (!authService.getToken().id) {
					$location.path('/login');
				}
			}
			
			service.index = function() {
				checkLogin();
				console.log('in service');
				return $http({
					method : 'GET',
					url : BASE_URL + authService.getToken().id + '/todo'
				}).then(function(res){
					return res;
				})
			}
			
			
			return service;
		})