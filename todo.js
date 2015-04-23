
	angular.module('ToDoApp',[]).
	controller('TodoController', function(){
		var todoList = this;

		todoList.todo = [
			//{'title':'', done: false}
		]; //start with empty array so as not to start with a lost checkbox

		todoList.addTodo = function () {
			todoList.todo.push({title: todoList.newTodo, done: false});
				todoList.newTodo = '';
				};//close addTodo function 

		todoList.remaining = function() {
			var count = 0;
			angular.forEach(todoList.todo, function(currentTodo){  //angular.forEach iterator function 
				count += currentTodo.done ? 0 : 1;  
			});
			return count;
		};

		todoList.hideDone = function () {
			var oldTodo = todoList.todo;
			todoList.todo = [];//creat empty array
			angular.forEach(oldTodo, function(currentTodo){
				if (!currentTodo.done) todoList.todo.push(currentTodo);// create array of  undone todos from original array
			});
		};
});