todoList.controller('TodoListController', [function() {

  var self = this;

  self.createTask = null; //try empty string instead?
  self.list = [];
  

  self.addTask = function(){
    self.list.push(self.createTask);
  };

  self.removeTask = function(){
    self.list.splice(0, 1);
  };

}]);
