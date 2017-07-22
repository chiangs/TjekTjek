angular.module('user').factory(
	'userService',
	function($http, authService, $location) {
		var service = [];
		var user = [];

		var BASE_URL = 'http://localhost:8080/TjekREST/rest/';

		var checkLogin = function() {
			if (!authService.getToken().id) {
				$location.path('/login');
			}
		}

		service.show = function(uid) {
			checkLogin();
			return $http({
				method : 'GET',
				url : BASE_URL + authService.getToken().id + '/user'
			}).then(function(res) {
				return res;
			})
		}
		
		service.update = function(userUpdate) {
			checkLogin();
			return $http({
				method : 'PUT',
				url : BASE_URL + authService.getToken().id + '/user',
				headers : {
					'Content-Type' : 'application/json'
				},
				data : userUpdate
			})
		}
		
		service.deactivate = function() {
			checkLogin();
			return $http({
				method : 'DELETE',
				url : BASE_URL + authService.getToken().id + '/user'
			}).then(function() {
				authService.logout();
			})
		}
		
		return service;
	})