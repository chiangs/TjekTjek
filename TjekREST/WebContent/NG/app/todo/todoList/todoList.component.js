angular.module('todo').component('todoList', {
	templateUrl : 'NG/app/todo/todoList/todoList.component.html',
	controller : function(todoService, $filter, $scope) {
		var vm = this;
		vm.todos = [];
		
		vm.showTable=true;
		vm.selected=null;
		
		vm.reload = function(){
			console.log('in reload');
			todoService.index().then(function(res){
				vm.todos = res.data;
			});
		}
		
		vm.reload();
	},
	controllerAs : 'vm'
})