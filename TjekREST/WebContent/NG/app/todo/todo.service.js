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
			
			service.create = function(todo) {
				checkLogin();
				return $http({
					method : 'POST',
					url : BASE_URL + authService.getToken.id + '/todo',
					headers : {
						'Content-Type' : 'application/json'
					},
					data : todo
				}).then(function(res) {
					$rootScope.$broadcast('newTodo', { //this needs additional programming for full functionality
						newTodo : res.data
					});
				})
			}
			
			
			return service;
		})