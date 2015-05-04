describe('Todo List', function() {

  var taskBox = element(by.model('toDo.createTask'));
  var taskButton = element(by.className('btn'));

  beforeEach(function(){
    browser.get('http://localhost:8080');
  })
  
  it('has a title', function() {
    expect(browser.getTitle()).toEqual('To Do List');
  });

  it('add tasks to the list', function() {
    taskBox.sendKeys('Buy milk');
    taskButton.click();

    var tasks = element.all(by.repeater('list in toDo.list'));
    expect(tasks.getText()).toContain('Buy milk')
  });
  
});