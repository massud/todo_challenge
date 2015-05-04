todoList.controller('TodoListController', [function() {

  var self = this;

  self.createTask = ""; //try empty string instead?
  self.list = [];
  

  self.addTask = function(){
    self.list.push(self.createTask);
    self.createTask = ""
  };

  self.removeTask = function(start){
    self.list.splice(start, 1);
  };

}]);

self.newtask
