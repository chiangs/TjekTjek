angular.module('todo').component('todoList', {
	templateUrl : 'NG/app/todo/todoList/todoList.component.html',
	controller : function(todoService, $filter, $scope) {
		var vm = this;
		vm.todos = [];
		
//		Default view settings to show index of all tasks
		vm.showTable=true;
		vm.selected=null;
		
//		Reload to get latest persisted changes
		vm.reload = function(){
			todoService.index().then(function(res){
				vm.todos = res.data;
			});
		}
		
//		Delete task
		vm.deleteTodo = function(todo){
			todoService.destroy(todo.id).then(function(res){
				vm.reload();
			})
		}
		
//		Create task
		vm.newTodo = function(todo){ //this needs testing and angular coding
			todoService.create(todo).then(function(res){
				vm.todo={};
				vm.reload();
			})
		}
		
//		Changes view settings to show task details, sets up editing
		vm.displayTodo = function(todo){
			vm.showTable = false;
			vm.selected = todo;
		}
		
//		Edit form
		vm.displayTable = function() {
			vm.showTable = true;
			vm.selected = null;
		}
		
//		Update task
		vm.updateTodo = function(todo) {
			todoService.update(todo).then(function(res){
				vm.reload();
			})
		}
		
		vm.reload();
	},
	controllerAs : 'vm'
})