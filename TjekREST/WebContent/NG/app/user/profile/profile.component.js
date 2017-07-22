angular.module('user').component('profile', {
	templateUrl : 'NG/app/user/profile/profile.component.html',
	controller : function(userService, $location) {
		var vm = this;
		vm.user = [];
		
//		Get user data
		vm.reload = function(uid){
			userService.show(uid).then(function(res){
				vm.user= res.data;
			});
		}
		
//		Deactivate user account
		vm.deactivate = function(){
			userService.deactivate().then(function(){
				$location.path('/');
			})
		}
		
//		Update user account
		vm.update = function(userUpdate){
			console.log(userUpdate);
			userService.update(userUpdate).then(function(res){
				vm.user = res.data;
				$location.path('/todo');
			})
		}		
		
		vm.reload();
	},
	controllerAs : 'vm'
})