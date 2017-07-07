angular.module('todo').component('todoList', {
	templateUrl : 'NG/app/todo/todoList/todoList.component.html',
	controller : function(todoService, $filter, $scope) {
		var vm = this;
		vm.todos = [];
		
		vm.showTable=true;
		vm.selected=null;
		
		vm.reload = function(){
			todoService.index().then(function(res){
				vm.todos = res.data;
			});
		}
		
		vm.deleteTodo = function(todo){
			todoService.destroy(todo.id).then(function(res){
				vm.reload();
			})
		}
		
		vm.newTodo = function(todo){ //this needs testing and angular coding
			todoService.create(todo).then(function(res){
				vm.todo={};
				vm.reload();
			})
		}
		
		vm.reload();
	},
	controllerAs : 'vm'
})