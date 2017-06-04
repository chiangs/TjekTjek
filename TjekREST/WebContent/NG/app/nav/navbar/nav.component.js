angular.module('nav').component('navbar', {
	templateUrl : 'NG/app/nav/navbar/nav.component.html',
	controller : function(authService) {
		var vm = this;
		
		vm.isLoggedIn = function() {
			if (authService.getToken().id) {
				vm.id = authService.getToken().id;
				return true;
			}
			return false;
		}
		
	},
	controllerAs : 'vm'
})