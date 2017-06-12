angular.module('todo').component('todoList', {
	templateUrl : 'NG/app/todo/todoList/todoList.component.html',
	controller : function(todoService, $filter, $scope) {
		var vm = this;
		vm.todos = [];
	},
	controllerAs : 'vm'
})