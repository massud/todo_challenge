describe('TodoList', function(){
  beforeEach(module('TodoList'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('TodoListController');
  }));

  it('initialises with no created tasks', function(){
    expect(ctrl.list).toEqual([]);
  });

  // it('can create a task', function(){
  //   ctrl.todoTask = "Buy milk"
  //   expect(ctrl.createTask).toEqual("Buy milk");
  // });

  it('can add a task', function(){
    ctrl.todoTask = "Buy milk"
    ctrl.addTask();
    expect(ctrl.list).toEqual[ Object({ done: false, text: 'Buy milk' }) ];
  });

  // it('can total tasks' function(){
  //   ctrl.todoTask = "Buy milk"
  //   ctrl.addTask();
  //   expect(ctrl.total).toEqual(1);
  // });

  it('can remove a task', function(){
    ctrl.todoTask = "Buy milk"
    ctrl.addTask();
    ctrl.removeTask();
    expect(ctrl.list).toEqual([])
  });
});
