describe('Todo List', function() {

  var taskBox = element(by.model('ctrl.todoTask'));
  var taskButton = element(by.className('btn'));

  beforeEach(function(){
    browser.get('http://localhost:8080');
  })
  
  it('has a title', function() {
    expect(browser.getTitle()).toEqual('To Do List');
  });

  it('can submit task', function() {
    expect(browser.isElementPresent(by.model('ctrl.todoTask'))).toBe(false);
  });

  it('it can receive task', function() {
    expect(browser.isElementPresent(by.model('ctrl.todoTask'))).toBe(false);
  });

describe('When making a list', function(){

    var tasks;

    beforeEach(function(){
      tasks = element.all(by.repeater('list in toDo.list'));
      
      taskBox.sendKeys('Buy milk');
      taskButton.click();

    expect(tasks.getText()).toContain('Buy milk')

      });
    });
});


