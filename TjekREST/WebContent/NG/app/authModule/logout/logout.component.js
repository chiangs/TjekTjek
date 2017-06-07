angular.module('authModule').component('logout', {
	templateUrl : 'NG/app/authModule/logout/logout.component.html',
	controller : function(authService, $location) {
		var vm = this;
		
		vm.logout = function() {
			console.log('logged out');
			return authService.logout().then(function(){
				$location.path('/');
			}).catch(function(){
				vm.error = 'Logout Failed';
			})
		}
		
		
	},
	
	controllerAs : 'vm'
})