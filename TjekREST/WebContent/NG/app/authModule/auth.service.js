angular.module('authModule').factory('authService', function($http, $cookies, $location) {
	var service = {};
	
	var saveToken = function(user) {
		$cookies.put('email', user.email);
		$cookies.put('id', user.id);
	}
	
	var BASE_URL = 'rest/auth/';
	
	service.getToken = function() {
		var user = {
				'email' : $cookies.get('email'),
				'id' : $cookies.get('id')
		}
		return user;
	}
	
	var removeToken = function() {
		$cookies.remove('email');
		$cookies.remove('id');
	}
	
	service.login = function(user) {
		return $http({
			method : 'POST',
			url : BASE_URL + 'login',
			headers : {
				'Content-Type' : 'application/json'
			},
			data : user
		}).then(function(res){
			saveToken(res.data);
		})
	}
	
	service.register = function(user) {
		return $http({
			method : 'POST',
			url : BASE_URL + 'register',
			headers : {
				'Content-Type' : 'application/json' 
			},
			data : user
		}).then(function(res){
			console.log(res.data);
			saveToken(data.res);
			$location.path(res.data.id+'/todo');
		})
	}
	
	service.logout = function() {
		return $http({
			method : 'POST',
			url : BASE_URL + 'logout'
		}).then(function(res){
			removeToken(res.data);
		})
	}
	
	
	return service;
})