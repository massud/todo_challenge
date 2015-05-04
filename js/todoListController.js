todoList.controller('TodoListController', [function() {

  var self = this;

  self.list = [];
  self.todoTask = null;
  

  self.addTask = function () {
    var newTodo = {
      done: false,
      text: self.todoTask
    };

    self.list.push(newTodo);
    self.todoTask = "";
  };

  self.total = function () {
    self.list.length;
  };

  self.removeTask = function (element){
    self.list.splice(element, 1);
  };

  self.move = function (index, direction){
    if (direction === 'up') {
      if (index === 0) {
        return;
      }
      index = index - 1;
    }
    if (direction === "down"){
      if (index === self.list.length - 1) {
      return;  
      }
    }

   var moveTask = self.list[index];
   self.list.splice(index + 2, 0, moveTask);
   self.list.splice(index, 1);
  };


}]);

