angular.module('authModule').component('login', {
	templateUrl : 'NG/app/authModule/login/login.component.html',
	controller : function(authService, $location) {
		var vm = this;
		vm.error = null;
		vm.showRegForm = false;
		vm.showLogForm = true;
		
		vm.login = function(user) {
			console.log('in login');
			authService.login(user).then(function(res) {
				console.log(res.data);
				$location.path('/todo/')
			}).catch(function() {
				vm.error = 'Problem finding user that matches input. Please check email/password';
			})
		}
		
		vm.showRegFormButton = function() {
			vm.showRegForm = true;
			vm.showLogForm = false;
		}
		
		vm.reload = function() {
			window.location.reload();
		}
		
		
	},
	
	controllerAs : 'vm'
})