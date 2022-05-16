class ToDoPage {

  get task () {
      return(num) =>  $(`.todo-list li:nth-child(${num})`)
  }

  get addNewTaskField() {
    return $('.new-todo')
  }

  get checkbox() {
    return(num) => $(`.todo-list li:nth-child(${num}) input`)
  }

  get showCompletedTaskButton() {
    return $('.filters > li:nth-child(3)')
  }

  get showActiveTaskButton() {
    return $('.filters > li:nth-child(2)')
  }

  get showAllTaskButton() {
    return $('.filters > li:nth-child(1)')
  }

  get clearCompletedButton() {
    return $('.clear-completed')
  }
  
  async addNewTask(text) {
    await this.addNewTaskField.setValue(text)
    await browser.keys('Enter')
  }
}

module.exports = new ToDoPage();
