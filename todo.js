
	angular.module('ToDoApp',[]).controller('TodoController',['$scope', function($scope){
		
		


		$scope.todo = [
			{'title':'Build a To Do App', done: false}//start with empty array so as not to start with a lost checkbox
			//if(!angular.isObject(todo.title) todo=[];
		]; 

		//emptyTodo = function () {  //hides checkbox but still counts as one todo

		//angular.isObject(todo.title) todo=[];
		//}



		$scope.addTodo = function () {
			$scope.todo.push({title: $scope.newTodo, done: false});
				$scope.newTodo = '';
				//LocalStorage.setItem('todo', JSON.stringify(todo));
				}//close addTodo function 

		$scope.remaining = function() {
			var count = 0;
			angular.forEach($scope.todo, function(currentTodo){  //angular.forEach iterator function 
				count += currentTodo.done ? 0 : 1;  
			});
			return count;
		}

		$scope.hideDone = function () {
			var oldTodo = $scope.todo;
			$scope.todo = [];//creat empty array
			angular.forEach(oldTodo, function(currentTodo){
				if (!currentTodo.done) $scope.todo.push(currentTodo);// create array of  undone todos from original array
			});
			//LocalStorage.setItem('todo', JSON.stringify(todo));
		}
}])