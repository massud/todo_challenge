describe('TodoList', function(){
  beforeEach(module('TodoList'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('TodoListController');
  }));

  it('initialises with no created tasks', function(){
    expect(ctrl.createTask).toEqual(""); //toBeNull instead?
  });

  it('can create a task', function(){
    ctrl.createTask = "Buy milk"
    expect(ctrl.createTask).toEqual("Buy milk");
  });

  it('can add a task once created', function(){
    ctrl.createTask = "Buy milk"
    ctrl.addTask();
    expect(ctrl.list).toContain("Buy milk");
  });

  it('can remove a task', function(){
    ctrl.createTask = "Buy milk"
    ctrl.addTask();
    ctrl.removeTask("Buy milk");
    expect(ctrl.list).toEqual([])
  });
});
